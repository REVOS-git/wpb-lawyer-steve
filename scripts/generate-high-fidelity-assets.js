const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processAll() {
  console.log('--- Generating High-Fidelity Assets ---');

  // 1. Scenery Photos from raw camera originals in client-materials/
  console.log('\n1. Processing raw camera photos from client-materials/ ...');
  
  // Boardwalk: 4032x3024 -> 2880x2160 (High-DPI Retina Master)
  await sharp('client-materials/photo of boardwalk at beach.jpg')
    .resize({ width: 2880, height: 2160, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .jpeg({ quality: 94, mozjpeg: true, progressive: true, trellisQuantisation: true })
    .toFile('public/images/jupiter-beach-boardwalk.jpg');
  console.log('✓ public/images/jupiter-beach-boardwalk.jpg (2880x2160, MozJPEG q=94)');

  // Dock: 5312x2988 -> 3200x1800 (16:9 3.2K Master)
  await sharp('client-materials/photo of lighthouse and dock.JPG')
    .resize({ width: 3200, height: 1800, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .jpeg({ quality: 94, mozjpeg: true, progressive: true, trellisQuantisation: true })
    .toFile('public/images/jupiter-lighthouse-dock.jpg');
  console.log('✓ public/images/jupiter-lighthouse-dock.jpg (3200x1800, MozJPEG q=94)');

  // Lighthouse in public/images/: 5312x2988 -> 3200x1800
  await sharp('client-materials/photo of lighthouse.jpg')
    .resize({ width: 3200, height: 1800, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .jpeg({ quality: 94, mozjpeg: true, progressive: true, trellisQuantisation: true })
    .toFile('public/images/jupiter-lighthouse.jpg');
  console.log('✓ public/images/jupiter-lighthouse.jpg (3200x1800, MozJPEG q=94)');

  // Root background hero jupiter-lighthouse.jpg (used by Hero.tsx & PageHeroBg.tsx)
  await sharp('client-materials/photo of lighthouse.jpg')
    .resize({ width: 3200, height: 1800, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .jpeg({ quality: 94, mozjpeg: true, progressive: true, trellisQuantisation: true })
    .toFile('public/jupiter-lighthouse.jpg');
  console.log('✓ public/jupiter-lighthouse.jpg (3200x1800, MozJPEG q=94)');

  // Courthouse: 958x356 -> 1916x712 (2x Lanczos3 upscale with edge preservation)
  await sharp('client-materials/photo of courthouse.png')
    .resize({ width: 1916, height: 712, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.6, m2: 2.2, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/palm-beach-courthouse.png');
  console.log('✓ public/images/palm-beach-courthouse.png (1916x712, 2x Upscaled)');

  // 2. Attorney Portraits: Upscaling, unsharp mask sharpening, contrast recovery
  console.log('\n2. Enhancing Attorney Portraits ...');

  // First, read existing buffers into memory to avoid in-place read/write conflicts
  const suitBuf = fs.readFileSync('public/images/steve-headshot-suit.png');
  const outdoorBuf = fs.readFileSync('public/images/steve-outdoor-lighthouse.png');
  const railingBuf = fs.readFileSync('public/images/steve-waterfront-railing.png');
  const deskBuf = fs.readFileSync('public/images/steve-at-desk.jpg');
  const artBuf = fs.readFileSync('public/images/steve-portrait-lighthouse-art.png');

  // steve-headshot-suit: 504x760 -> 1008x1520 (2x)
  await sharp(suitBuf)
    .resize({ width: 1008, height: 1520, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.1, m1: 0.7, m2: 2.3, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/steve-headshot-suit.png');
  console.log('✓ public/images/steve-headshot-suit.png (1008x1520, 2x Upscaled & Sharpened)');

  // steve-outdoor-lighthouse: 336x468 -> 1008x1404 (3x)
  await sharp(outdoorBuf)
    .resize({ width: 1008, height: 1404, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.1, m1: 0.7, m2: 2.4, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/steve-outdoor-lighthouse.png');
  console.log('✓ public/images/steve-outdoor-lighthouse.png (1008x1404, 3x Upscaled & Sharpened)');

  // steve-waterfront-railing: 330x736 -> 990x2208 (3x)
  await sharp(railingBuf)
    .resize({ width: 990, height: 2208, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.1, m1: 0.7, m2: 2.4, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/steve-waterfront-railing.png');
  console.log('✓ public/images/steve-waterfront-railing.png (990x2208, 3x Upscaled & Sharpened)');

  // steve-at-desk: 805x1024 -> 1610x2048 (2x)
  await sharp(deskBuf)
    .resize({ width: 1610, height: 2048, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.7, m2: 2.2, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .jpeg({
      quality: 95,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:4:4',
      trellisQuantisation: true,
      overshootDeringing: true
    })
    .toFile('public/images/steve-at-desk.jpg');
  console.log('✓ public/images/steve-at-desk.jpg (1610x2048, 2x Upscaled, MozJPEG q=95, 4:4:4)');

  // steve-portrait-lighthouse-art: 461x634 -> 922x1268 (2x)
  await sharp(artBuf)
    .resize({ width: 922, height: 1268, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.1, m1: 0.7, m2: 2.3, x1: 2, y2: 12, y3: 25 })
    .linear(1.02, -2)
    .png({ compressionLevel: 9, effort: 10 })
    .toFile('public/images/steve-portrait-lighthouse-art.png');
  console.log('✓ public/images/steve-portrait-lighthouse-art.png (922x1268, 2x Upscaled & Sharpened)');

  console.log('\n--- All Assets Processed Successfully ---');
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});
