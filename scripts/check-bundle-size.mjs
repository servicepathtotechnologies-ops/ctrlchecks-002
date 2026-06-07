/**
 * Bundle size checker.
 * Reads dist/assets and enforces per-chunk size limits.
 * Run: node scripts/check-bundle-size.mjs
 */
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const DIST = new URL('../dist/assets', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const LIMITS = [
  { pattern: /AutonomousAgentWizard.*\.js$/i, maxKB: 600, label: 'wizard chunk' },
  { pattern: /^index.*\.js$/i, maxKB: 500, label: 'main chunk' },
];

let failed = false;

let files;
try {
  files = readdirSync(DIST);
} catch {
  console.error(`dist/assets not found — run "npm run build" first`);
  process.exit(1);
}

for (const limit of LIMITS) {
  const matching = files.filter(f => limit.pattern.test(f));
  if (matching.length === 0) {
    console.log(`[skip] no file matching ${limit.pattern} (${limit.label})`);
    continue;
  }
  for (const file of matching) {
    const bytes = statSync(join(DIST, file)).size;
    const kb = (bytes / 1024).toFixed(1);
    const ok = bytes <= limit.maxKB * 1024;
    const symbol = ok ? '✓' : '✗';
    console.log(`${symbol}  ${file}  ${kb} kB  (limit: ${limit.maxKB} kB) [${limit.label}]`);
    if (!ok) failed = true;
  }
}

if (failed) {
  console.error('\nBundle size check FAILED — reduce chunk size or raise the limit in scripts/check-bundle-size.mjs');
  process.exit(1);
} else {
  console.log('\nBundle size check passed.');
}
