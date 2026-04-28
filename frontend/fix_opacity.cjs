const fs = require('fs');
const path = require('path');

const filesToUpdate = {
  'src/components/menu/CategoryCards.jsx': 'opacity-80',
  'src/components/menu/BuildPlate.jsx': 'opacity-80',
  'src/components/home/PackageList.jsx': 'opacity-80',
  'src/components/Gallery.jsx': 'opacity-60'
};

for (const [file, opacityClass] of Object.entries(filesToUpdate)) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the specific opacity class globally in the file (only matching word boundary)
  const regex = new RegExp(`\\b${opacityClass}\\b`, 'g');
  content = content.replace(regex, '');
  
  // Clean up any double spaces left behind inside classNames
  content = content.replace(/\s{2,}/g, ' ');
  
  fs.writeFileSync(filePath, content);
  console.log(`Removed ${opacityClass} from ${file}`);
}
