import sharp from 'sharp';
import fs from 'fs';

// Crop the Android system bars off each raw screenshot and bake a clean,
// pixel-aligned iOS status bar (time · Dynamic Island · signal/wifi/battery)
// using each screen's own background colour so it blends seamlessly.

const RAW = 'public/images/raw';
const OUT = 'public/images';
const W = 1080;
const TOP_CROP = 64;   // android status bar
const BOTTOM_CROP = 66; // android gesture / nav bar
const BAND = 150;      // baked iOS status bar height

const screens = [
  'app-home', 'app-ai', 'app-pantry', 'app-progress', 'app-shopping',
  'app-meal', 'app-diet', 'app-add', 'app-plan', 'app-profile',
  'app-login', 'app-onboarding',
];

const DARK = '#1A1B1F';

function statusBar(bg) {
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${BAND}" viewBox="0 0 ${W} ${BAND}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${BAND}" fill="${bg}"/>
  <!-- time -->
  <text x="96" y="92" font-family="Poppins, -apple-system, 'Segoe UI', sans-serif"
        font-size="46" font-weight="600" fill="${DARK}" letter-spacing="0.5">9:41</text>
  <!-- dynamic island -->
  <rect x="378" y="30" width="324" height="90" rx="45" fill="#0A0B0E"/>
  <!-- signal bars -->
  <g fill="${DARK}">
    <rect x="792" y="66" width="14" height="18" rx="3"/>
    <rect x="814" y="58" width="14" height="26" rx="3"/>
    <rect x="836" y="50" width="14" height="34" rx="3"/>
    <rect x="858" y="42" width="14" height="42" rx="3"/>
  </g>
  <!-- wifi -->
  <g fill="none" stroke="${DARK}" stroke-width="7" stroke-linecap="round">
    <path d="M884 60 Q908 38 932 60"/>
    <path d="M893 72 Q908 58 923 72"/>
  </g>
  <circle cx="908" cy="82" r="5.5" fill="${DARK}"/>
  <!-- battery -->
  <rect x="952" y="58" width="80" height="36" rx="11" fill="none" stroke="${DARK}" stroke-width="5" opacity="0.5"/>
  <rect x="1035" y="68" width="7" height="16" rx="3.5" fill="${DARK}" opacity="0.5"/>
  <rect x="959" y="65" width="52" height="22" rx="5" fill="${DARK}"/>
</svg>`);
}

async function bgColor(img) {
  // sample a few edge patches just below the crop line and keep the lightest
  // one — the app background is always lighter than any icon/text that may sit
  // near the corners.
  const spots = [
    { left: 6, top: TOP_CROP + 4 },
    { left: W - 24, top: TOP_CROP + 4 },
    { left: W / 2 - 9, top: TOP_CROP + 4 },
  ];
  let best = null, bestSum = -1;
  for (const s of spots) {
    const { data, info } = await img.clone()
      .extract({ left: Math.round(s.left), top: s.top, width: 18, height: 14 })
      .raw().toBuffer({ resolveWithObject: true });
    const c = info.channels, n = info.width * info.height;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < data.length; i += c) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
    r /= n; g /= n; b /= n;
    if (r + g + b > bestSum) { bestSum = r + g + b; best = [r, g, b]; }
  }
  const h = (v) => Math.round(v).toString(16).padStart(2, '0');
  return '#' + h(best[0]) + h(best[1]) + h(best[2]);
}

for (const name of screens) {
  const src = `${RAW}/${name}.jpg`;
  if (!fs.existsSync(src)) { console.log('skip (no raw):', name); continue; }
  const base = sharp(src);
  const meta = await base.metadata();
  const contentH = meta.height - TOP_CROP - BOTTOM_CROP;
  const bg = await bgColor(base);

  const content = await base.clone()
    .extract({ left: 0, top: TOP_CROP, width: W, height: contentH })
    .toBuffer();

  await sharp({
    create: { width: W, height: BAND + contentH, channels: 3, background: bg },
  })
    .composite([
      { input: statusBar(bg), top: 0, left: 0 },
      { input: content, top: BAND, left: 0 },
    ])
    .jpeg({ quality: 90 })
    .toFile(`${OUT}/${name}.jpg`);

  console.log('done:', name, `${W}x${BAND + contentH}`, 'bg', bg);
}
