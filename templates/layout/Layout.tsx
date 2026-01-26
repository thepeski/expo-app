/* @layouts/Layout/Layout.tsx */
// description

// react
// import { useMemo } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// expo

// src

// local
// import { } from "./logic";
// import { makeStyles } from "./styles";
import { Props } from "./types";

function Layout(_: Props) {
    // const s = makeStyles();
    // const s = useMemo(() => makeStyles(), []);

    return (
        <SafeAreaView>
            <Text>Layout</Text>
        </SafeAreaView>
    );
}

export default Layout;