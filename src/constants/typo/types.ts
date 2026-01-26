/* @constants/typo/types.ts */

// local
import { typo } from "./typo";

type TypoPreset = {
    font: keyof typeof typo.family;
    weight?: keyof typeof typo.weight;
    size: keyof typeof typo.size;
};

export type { TypoPreset };