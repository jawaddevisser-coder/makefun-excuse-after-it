import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty: machine
// logic, a straight face about its own failure, owning the loss.
const LINE =
  "I lost. I would blame the data, the market, or the moon, but the logs say the problem was me, at 14:32, being confidently wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
console.log(LINE);
