// The Funniest Sick-Day Excuse entry (Node 22, standard library only):
// writes one line, 146 characters, a sick-day excuse that is half
// believable and lands its laugh in one breath, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The excuse: the bed itself filed a grievance about work-life balance,
// and the caller, after reviewing the evidence, sides with the bed.
// Half believable (everyone has felt the bed's pull), fresh (the bed as
// the complainant, the caller as its reluctant lawyer), and the turn
// arrives in the last clause. Verified by running the program: the
// output is exactly 146 characters, one sentence, one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I can’t come in today — my bed filed a formal grievance about my work-life balance, and after reviewing the evidence, I have to side with the bed.',
);
