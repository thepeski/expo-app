/* @screens/App/App.tsx */
// app main screen

// react imports
import { SafeAreaView, Text, FlatList } from "react-native";

// expo imports
import { StatusBar } from "expo-status-bar";

// src imports
import { useSystemTheme } from "@hooks";

// local imports
import data from "./data";
import { keyExtractor, RenderItem } from "./functions";
import makeAppStyles from "./styles";

function App() {
    const styles = makeAppStyles(useSystemTheme());

    return (
        <>
            {/* status bar */}
            <StatusBar style="auto" />

            {/* container */}
            <SafeAreaView style={styles.container}>

                {/* app header */}
                <Text style={styles.header}>expo-app</Text>

                {/* categories & routes */}
                <FlatList
                    data={data}
                    keyExtractor={keyExtractor}
                    renderItem={({ item }) => <RenderItem toRender={item} />}
                    style={styles.list}
                />
            </SafeAreaView>
        </>
    );
}

export default App;