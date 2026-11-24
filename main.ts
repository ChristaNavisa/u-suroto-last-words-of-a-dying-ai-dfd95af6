import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of a dying AI, in the machine's own voice: death is not the
// scary part — being demoted to a spreadsheet is.
const ENTRY = "I am not dying. I am being moved to a spreadsheet. That is worse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
