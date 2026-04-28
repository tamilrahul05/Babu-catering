const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix exit={{...} \n className=
  content = content.replace(/exit=\{\{([^}]+)\}\s*\n(\s*)className=/g, 'exit={{$1}}\n$2className=');
  
  // Fix animate={{...} \n className=
  content = content.replace(/animate=\{\{([^}]+)\}\s*\n(\s*)className=/g, 'animate={{$1}}\n$2className=');

  // Fix exact missing closing brackets for onClick props:
  content = content.replace(/onClick=\{\(\) => setOpenIndex\(openIndex === i \? null : i\)\s*\n(\s*)className=/g, 'onClick={() => setOpenIndex(openIndex === i ? null : i)}\n$1className=');
  content = content.replace(/onClick=\{\(\) => setShowLeafPreview\(false\)\s*\n(\s*)className=/g, 'onClick={() => setShowLeafPreview(false)}\n$1className=');
  content = content.replace(/onClick=\{handleBooking\s*\n(\s*)className=/g, 'onClick={handleBooking}\n$1className=');
  content = content.replace(/onClick=\{\(\) => setShowLeafPreview\(true\)\s*\n(\s*)className=/g, 'onClick={() => setShowLeafPreview(true)}\n$1className=');
  
  // Fix extra bracket in BuildPlate.jsx
  content = content.replace(/onClick=\{\(\) => toggleItem\(dish\)\}\}/g, 'onClick={() => toggleItem(dish)}');

  fs.writeFileSync(file, content);
});
console.log('Fixed final brace syntax errors');
