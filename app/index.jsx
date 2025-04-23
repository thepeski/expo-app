/* index.jsx */
// rendered by root layout

// default imports
import { SafeAreaView, Text } from "react-native";

// custom imports
import { useBootstrap } from "../src/hooks/useBootstrap";
import FallbackScreen from "../src/components/FallbackScreen";
import Fallback from "../src/constants/Fallback";

function App() {

    // load data required on statup
    const { bootReady, bootError } = useBootstrap();

    // show error or loading screen
    if (bootError) {
        return (
            <FallbackScreen
                loading={false}
                error={bootError}
                message={Fallback.loadApp.error}
                action={Fallback.loadApp.action}
                onAction={Fallback.loadApp.onAction}
            />
        );
    } else if (!bootReady) {
        return (
            <FallbackScreen
                loading={true}
                error={false}
                message={Fallback.loadApp.loading}
            />
        );
    }

    return (
        <SafeAreaView>
            <Text className="text-xl">Hello world!</Text>
        </SafeAreaView>
    );
}

export default App;