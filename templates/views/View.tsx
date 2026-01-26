/* @views/View/View.tsx */
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

function View(_: Props) {
    // const s = makeStyles();
    // const s = useMemo(() => makeStyles(), []);

    return (
        <SafeAreaView>
            <Text>View</Text>
        </SafeAreaView>
    );
}

export default View;