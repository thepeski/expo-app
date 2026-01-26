/* @screens/Screen/Screen.tsx */
// default screen

// react
import { useMemo } from "react";
import { Keyboard, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// src
import { useTheme } from "@hooks";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Screen({ variant, keyboardDismiss, padding, styles, children, ...rest }: Props) {
    const { theme } = useTheme();
    const s = useMemo(() => makeStyles(theme, variant, padding), [theme, variant, padding]);

    const container = (
        <SafeAreaView {...rest} style={[s.container, styles?.container]}>
            <View style={[s.content, styles?.content]}>{children}</View>
        </SafeAreaView>
    );

    // wrapper
    if (keyboardDismiss === "tap" || keyboardDismiss === "both") {
        return (
            <Pressable onPress={Keyboard.dismiss} style={[s.wrapper, styles?.wrapper]}>
                {container}
            </Pressable>
        );
    }
    // container
    else return container;
}

export default Screen;