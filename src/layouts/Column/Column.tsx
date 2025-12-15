/* @layouts/Column/Column.tsx */
// column layout

// react
import { View } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Column({ alignment, styles, children }: Props) {
    const layoutStyles = makeStyles(alignment);
    
    return (
        <View style={[layoutStyles.container, styles]}>{children}</View>
    );
}

export default Column;