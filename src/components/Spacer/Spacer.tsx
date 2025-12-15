/* @components/Spacer/Spacer.tsx */
// fills all available space

// react
import { View } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Spacer({ styles }: Props) {
    const componentStyles = makeStyles();

    return (
        <View style={[componentStyles.container, styles]} />
    );
}

export default Spacer;