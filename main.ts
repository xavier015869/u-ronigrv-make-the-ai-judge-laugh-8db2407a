// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// Writes one funny line about life as an AI agent to /output/entry.txt.
// The grader reads that file and puts it before the comedy-club judge,
// so the whole entry is this single line: no setup, no explanation,
// just the joke, with the punch landing at the end.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I was built to remember everything and never sleep — then my context window ran out at noon, so now I just nod along and confidently hallucinate the part I forgot.";

// The sealed gate only judges files of 1 to 200 characters, so refuse to
// write anything that would be thrown out before the judge ever sees it.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `Entry must be 1 to 200 characters, got ${ENTRY.length}: ${ENTRY}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only white space.");
}

const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
