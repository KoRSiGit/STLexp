import fs from 'fs';
import path from 'path';

const folder = 'user_extracted/019ef4f6-70c5-7005-8d42-655b2fa47a2b';
if (fs.existsSync(folder)) {
  const files = fs.readdirSync(folder);
  console.log('Files in extracted folder:', files);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const p = path.join(folder, file);
      const content = fs.readFileSync(p, 'utf-8');
      const lines = content.split('\n');
      console.log(`\n======================================================`);
      console.log(`FILE: ${file}`);
      console.log(`SIZE: ${content.length} characters`);
      // Print first 5 headings or lines
      const headings = lines.filter(l => l.startsWith('#')).slice(0, 10);
      console.log('Headings in file:');
      console.log(headings.join('\n'));
      
      // Let's also search for typical patterns like "GW" or specific furnace names
      const gwLines = lines.filter(l => l.toLowerCase().includes('gw') || l.toLowerCase().includes('ичт') || l.toLowerCase().includes('печ')).slice(0, 5);
      if (gwLines.length > 0) {
        console.log('Sample furnace references:');
        console.log(gwLines.join('\n'));
      }
    }
  });
} else {
  console.log('Extracted folder not found!');
}
