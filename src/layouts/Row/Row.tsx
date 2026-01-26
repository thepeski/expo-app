/* @layouts/Row/Row.tsx */
// row layout

// react
import { useMemo } from "react";
import { View } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Row({ align, gap, style, children, ...rest }: Props) {
    const s = useMemo(() => makeStyles(align, gap), [align, gap]);

    return <View {...rest} style={[s.container, style]}>{children}</View>;
}

export default Row;