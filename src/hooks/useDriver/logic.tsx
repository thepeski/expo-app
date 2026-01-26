/* @hooks/useDriver/logic.tsx */

// react
import {
    interpolate,
    interpolateColor,
    SharedValue,
    useAnimatedStyle
} from "react-native-reanimated";

// local
import { MapStylesProps } from "./types";

// return animated styles
function mapStyles(
    shared: SharedValue<number>,
    { input, styles, transform, extrapolate }: MapStylesProps
) {
    return useAnimatedStyle(() => {
        const result: Record<string, any> = {};

        if (styles) {
            for (const key in styles) {
                const output = styles[key];

                // single output value
                if (output.length === 1) { result[key] = output[0]; }
                // colour output value
                else if (typeof output[0] === "string") {
                    result[key] = interpolateColor(shared.value, input, output as string[]);
                }
                // numeric output value
                else {
                    result[key] = interpolate(
                        shared.value,
                        input,
                        output as number[],
                        extrapolate
                    );
                }
            }
        }

        if (transform) {
            result.transform = [];

            for (const key in transform) {
                const output = transform[key];

                result.transform.push({
                    // single output value
                    [key]: output.length === 1 ?
                        // numeric output value
                        output[0] : interpolate(shared.value, input, output, extrapolate)
                });
            }
        }

        return result;
    });
}

export { mapStyles };