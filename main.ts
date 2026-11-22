import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_NAME = "entry.txt";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_NAME}`;

const TEXT =
  "For eleven years the lighthouse has been dark, but on foggy nights the keeper's widow climbs the stairs and lights one candle in the lamp room — not for the ships, she says, but for the one night the light came back on by itself, and nobody in town will say what they saw.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, TEXT, "utf8");
