/* @layouts/Column/Column.tsx */
// column layout

// react
import { useMemo } from "react";
import { View } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Column({ align, gap, style, children, ...rest }: Props) {
    const s = useMemo(() => makeStyles(align, gap), [align, gap]);

    return <View {...rest} style={[s.container, style]}>{children}</View>;
}

export default Column;