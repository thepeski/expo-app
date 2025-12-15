/* @layouts/Row/Row.tsx */
// row layout

// react
import { View } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Row({ alignment, styles, children }: Props) {
    const layoutStyles = makeStyles(alignment);

    return (
        <View style={[layoutStyles.container, styles]}>{children}</View>
    );
}

export default Row;