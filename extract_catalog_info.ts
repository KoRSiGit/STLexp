import fs from 'fs';
import path from 'path';

const folder = 'user_extracted/019ef4f6-70c5-7005-8d42-655b2fa47a2b';
if (fs.existsSync(folder)) {
  const files = fs.readdirSync(folder);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const p = path.join(folder, file);
      const content = fs.readFileSync(p, 'utf-8');
      const lines = content.split('\n');
      console.log(`\n======================================================`);
      console.log(`FILE: ${file}`);
      
      // Let's find markdown tables. A table typically has lines containing multiple "|" characters.
      console.log('--- FOUND TABLES OR LISTS OF MODELS ---');
      let insideTable = false;
      let tableLines: string[] = [];
      let foundAnyTable = false;

      lines.forEach((line, idx) => {
        const hasPipe = line.includes('|');
        if (hasPipe) {
          if (!insideTable) {
            insideTable = true;
            tableLines = [line];
          } else {
            tableLines.push(line);
          }
        } else {
          if (insideTable) {
            insideTable = false;
            if (tableLines.length > 2) {
              console.log(`Table at lines ${idx - tableLines.length} to ${idx}:`);
              // Print up to 10 lines of table
              console.log(tableLines.slice(0, 10).join('\n'));
              if (tableLines.length > 10) console.log(`... and ${tableLines.length - 10} more lines`);
              foundAnyTable = true;
            }
            tableLines = [];
          }
        }
      });
      
      if (!foundAnyTable) {
        console.log('No Markdown tables found in this file.');
      }
      
      // Find list items that look like models or specifications (e.g. GW-0.5)
      const matches = lines.filter(l => /GW-[0-9]/i.test(l) || /ИЧТ/i.test(l) || /ИПП/i.test(l) || /СХ-/i.test(l) || /РП-/i.test(l)).slice(0, 5);
      if (matches.length > 0) {
        console.log('Model/Specs references found:');
        console.log(matches.join('\n'));
      }
    }
  });
}
