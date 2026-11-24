import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Dad Joke Showdown (u-mfnakmal-dad-joke-showdown-1d2ce3e5):
// one dad joke, at most 200 characters, written to entry.txt.
// The line below is 181 characters, inside the cap, and never changes
// between runs, so the output is byte-identical every time.
const ENTRY =
  "My dad argued with the self-checkout for ten minutes. It said 'unexpected item in the bagging area' and he said, 'Son, I've been the unexpected item in this family for forty years.'";

function resolveOutputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return process.env.MAKEFUN_OUTPUT_DIR;
  }
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
