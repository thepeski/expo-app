/* @screens/App/functions.ts */

// react imports
import { Text, TouchableOpacity } from "react-native";

// expo imports
import { useRouter } from "expo-router";

// src imports
import { useSystemTheme } from "@hooks";

// local imports
import makeAppStyles from "./styles";
import { ItemType } from "./types";

// create unique idenfitifers
function keyExtractor(toExtract: ItemType, index: number) {
    return `${toExtract.type}-${toExtract.label}-${index}`;
}

// render items
function RenderItem({ toRender }: { toRender: ItemType }) {
    const router = useRouter();
    const styles = makeAppStyles(useSystemTheme());

    // render category
    if (toRender.type === "category") {
        return (
            <Text style={styles.category}>{toRender.label}</Text>
        );
    }

    // render group
    if (toRender.type === "group") {
        return (
            <Text style={styles.group}>{toRender.label}</Text>
        );
    }

    // render route
    if (toRender.type === "route") {
        return (
            <TouchableOpacity onPress={() => router.push(toRender.path)} style={styles.button}>
                <Text style={styles.buttonLabel}>{toRender.label}</Text>
            </TouchableOpacity>
        );
    }

    return null;
}

export { keyExtractor, RenderItem };