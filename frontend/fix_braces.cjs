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
  
  // Fix key={i\n className...
  content = content.replace(/key=\{([a-zA-Z0-9_]+)\s*\n(\s*)className=/g, 'key={$1}\n$2className=');
  
  // Fix transition={{...} \n className...
  content = content.replace(/transition=\{\{([^}]+)\}\s*\n(\s*)className=/g, 'transition={{$1}}\n$2className=');
  
  // Fix initial={{...} \n className...
  content = content.replace(/initial=\{\{([^}]+)\}\s*\n(\s*)className=/g, 'initial={{$1}}\n$2className=');
  
  // Fix whileInView={{...} \n className...
  content = content.replace(/whileInView=\{\{([^}]+)\}\s*\n(\s*)className=/g, 'whileInView={{$1}}\n$2className=');

  fs.writeFileSync(file, content);
});
console.log('Fixed broken braces in JSX');
