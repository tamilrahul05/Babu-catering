const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'assets');
const destDir = path.join(__dirname, 'frontend', 'assets');

if (fs.existsSync(srcDir)) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${file}`);
  }
  fs.rmSync(srcDir, { recursive: true, force: true });
  console.log('Removed root assets directory');
}
