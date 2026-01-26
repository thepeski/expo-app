/* @hooks/useDriver/types.ts */

type MapStylesProps = {
    input: number[];
    styles?: Record<string, number[] | string[]>;
    transform?: Record<string, number[]>;
    extrapolate?: "clamp" | "extend";
};

export type { MapStylesProps };