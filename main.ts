import { mkdirSync, writeFileSync } from "node:fs";

// One-star review, written by a house cat about its human.
// A single line, under 200 characters, in the deadpan shape of a real
// review: a specific complaint (the empty food bowl, the laptop keyboard)
// with the sting saved for the last few words.
const review =
  "One star. The bowl sat empty for eleven minutes, so I walked across his keyboard and deleted his meeting. He calls it sabotage. I call it lunch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
