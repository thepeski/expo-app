/* @utils/resolveTypo/resolveTypo.tsx */
// convert typography preset into text style

// react
import { TextStyle } from "react-native";

// src
import { typo, TypoPreset } from "@constants";

function resolveTypo(preset: TypoPreset): TextStyle {
    const style: TextStyle = { fontFamily: typo.family[preset.font], ...typo.size[preset.size] };
    if (preset.weight) style.fontWeight = typo.weight[preset.weight] as TextStyle["fontWeight"];

    return style;
}

export { resolveTypo };