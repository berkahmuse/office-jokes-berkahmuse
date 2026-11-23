// Office Jokes — make.fun entry for "Make the AI Judge Laugh: Office Jokes".
// Writes one one-line office joke (under 200 characters) to /output/entry.txt.
// Deterministic: every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I replied-all asking everyone to stop replying-all, and now I have 47 unread emails about it.";

// The gate requires 1 to 199 characters of non-whitespace text.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
