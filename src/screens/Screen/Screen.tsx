/* @screens/Screen/Screen.tsx */
// default screen

// react
import { SafeAreaView } from "react-native-safe-area-context";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Screen({ edges, styles, children }: Props) {
    const screenStyles = makeStyles();

    return (
        <SafeAreaView edges={edges} style={[screenStyles.safeArea, styles]}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;