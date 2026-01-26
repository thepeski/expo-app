/* @constants/scale/scale.ts */
// scale presets

const scale = {
    full: 1,
    press: { soft: 0.995, default: 0.99, strong: 0.98 },
    focus: { soft: 1.005, default: 1.01, strong: 1.02 },
} as const;

export { scale };