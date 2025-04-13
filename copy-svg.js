const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const targetDir = path.join(__dirname, 'public', 'assets', 'svg');
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}
if (!fs.existsSync(path.join(__dirname, 'public', 'assets'))) {
  fs.mkdirSync(path.join(__dirname, 'public', 'assets'));
}
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// Source SVG file path
const sourcePath = 'E:\\react\\newportfolio\\src\\assets\\svg\\Lakshya.svg';

// Target path in public folder
const targetPath = path.join(targetDir, 'Lakshya.svg');

try {
  // Read the source file
  const data = fs.readFileSync(sourcePath);
  
  // Write to the target location
  fs.writeFileSync(targetPath, data);
  
  console.log('SVG file copied successfully!');
} catch (err) {
  console.error('Error copying SVG file:', err);
}
