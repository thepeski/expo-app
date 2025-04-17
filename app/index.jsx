/* index.jsx */

// default imports
import { SafeAreaView, Text, Button } from "react-native";

// custom imports
import { useTheme } from "../src/context/ThemeContext";

// styles
import makeStyles from "../src/styles/themeStyles";

function Index() {

    // use theme context
    const { theme, userTheme, themePreference, systemTheme, toggleTheme, togglePreference } = useTheme();

    // determine styles based on theme
    const styles = makeStyles(theme);

    return (
        <SafeAreaView
            className="flex-1 items-center justify-center"
            style={styles.background}
        >
            {/* theme variables */}
            <Text style={styles.text}>Hello world!</Text>
            <Text style={styles.text}>Theme: {theme}</Text>
            <Text style={styles.text}>Preference: {themePreference}</Text>
            <Text style={styles.text}>User theme: {userTheme}</Text>
            <Text style={styles.text}>System theme: {systemTheme}</Text>

            {/* theme functions */}
            <Button
                title="Toggle User Theme"
                onPress={toggleTheme}
            />
            <Button
                title="Toggle Theme Preference"
                onPress={togglePreference}
            />
        </SafeAreaView>
    );
}

export default Index;