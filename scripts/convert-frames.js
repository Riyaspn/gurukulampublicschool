const fs = require('fs');
const path = require('path');

async function convertFrames() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('Error: sharp library is required. Run this script using npx -y -p sharp node scripts/convert-frames.js');
    process.exit(1);
  }

  const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');
  if (!fs.existsSync(heroDir)) {
    console.error(`Directory not found: ${heroDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(heroDir).filter(file => file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg'));
  console.log(`Found ${files.length} JPG files in ${heroDir}. Starting conversion to WebP...`);

  let totalOldBytes = 0;
  let totalNewBytes = 0;
  let convertedCount = 0;

  for (const file of files) {
    const inputPath = path.join(heroDir, file);
    const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
    const outputPath = path.join(heroDir, outputName);

    try {
      const stats = fs.statSync(inputPath);
      totalOldBytes += stats.size;

      // Convert to WebP, resize max width 1920 if larger, quality 80 for optimal web performance
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      totalNewBytes += newStats.size;
      convertedCount++;

      // Once successfully converted, remove original large JPG to save repository & build space
      fs.unlinkSync(inputPath);

      if (convertedCount % 20 === 0 || convertedCount === files.length) {
        console.log(`Progress: Converted ${convertedCount} / ${files.length} frames...`);
      }
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }

  const oldMB = (totalOldBytes / (1024 * 1024)).toFixed(2);
  const newMB = (totalNewBytes / (1024 * 1024)).toFixed(2);
  const savingsPercent = (((totalOldBytes - totalNewBytes) / totalOldBytes) * 100).toFixed(1);

  console.log('====================================================');
  console.log(`✅ Conversion successfully completed!`);
  console.log(`Converted: ${convertedCount} files to WebP.`);
  console.log(`Original total size: ${oldMB} MB`);
  console.log(`New total size:      ${newMB} MB`);
  console.log(`Bandwidth saved:     ${savingsPercent}% reduction!`);
  console.log('====================================================');
}

convertFrames();
