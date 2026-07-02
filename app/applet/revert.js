import { execSync } from 'child_process';
try {
  console.log("Reverting ProductCatalog.tsx...");
  const output = execSync('git checkout src/components/ProductCatalog.tsx', { encoding: 'utf-8' });
  console.log("Success:", output);
} catch (error) {
  console.error("Error running git checkout:", error.message);
  if (error.stdout) console.log("Stdout:", error.stdout);
  if (error.stderr) console.error("Stderr:", error.stderr);
}
