/* @views/BackgroundView/styles.ts */

// react imports
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function makeBackgroundViewStyles(excludeSafeArea?: boolean) {
    const { top, bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: excludeSafeArea ? top : 0,
            marginBottom: excludeSafeArea ? bottom : 0,
            paddingTop: excludeSafeArea ? 0 : top,
            paddingBottom: excludeSafeArea ? 0 : bottom
        }
    });
}

export default makeBackgroundViewStyles;