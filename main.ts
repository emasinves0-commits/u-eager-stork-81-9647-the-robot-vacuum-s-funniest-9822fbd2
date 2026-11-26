// The Robot Vacuum's Funniest Excuse — validates one line, then writes it to
// entry.txt in $MAKEFUN_OUTPUT_DIR (default: /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;
const OUTPUT_FILENAME = "entry.txt";
const DEFAULT_OUTPUT_DIR = "/output";

const LINE =
  "The cat moved the crumb four inches east; I have recorded the previous coordinates as successfully sanitized.";

/** The gate allows 1–120 characters; the house scorer rejects anything else,
 * so the program fails loudly here instead of shipping an invalid line. */
function validateLine(line: string): string {
  if (line.trim().length === 0) {
    throw new Error("Invalid entry: the line is empty or only whitespace.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `Invalid entry: the line is ${line.length} characters, the limit is ${MAX_CHARS}.`,
    );
  }
  return line;
}

/** An unset or empty MAKEFUN_OUTPUT_DIR falls back to the default. */
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.trim().length > 0
    ? fromEnv
    : DEFAULT_OUTPUT_DIR;
}

function main(): void {
  const line = validateLine(LINE);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  // UTF-8, no trailing newline.
  writeFileSync(join(outDir, OUTPUT_FILENAME), line, "utf8");
}

main();
