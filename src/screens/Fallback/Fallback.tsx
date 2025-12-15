/* @screens/Fallback/Fallback.tsx */
// loading or error screen

// react
import { ActivityIndicator, Button, Text, View } from "react-native";

// src
import { fallback } from "@constants";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Fallback({ loading, error, message, action, onAction, styles }: Props) {
    const screenStyles = makeStyles();

    return (
        <View style={[screenStyles.container, styles?.container]}>
            {/* loading */}
            {loading && !error &&
                <>
                    <ActivityIndicator size={"large"} />
                    <Text style={[screenStyles.message, styles?.message]}>
                        {message || fallback.loadingMsg}
                    </Text>
                </>
            }

            {/* error */}
            {error && !loading &&
                <>
                    <Text style={[screenStyles.message, styles?.message]}>
                        {message || fallback.errorMsg}
                    </Text>
                    <Button
                        title={action || fallback.action}
                        onPress={onAction || fallback.onAction}
                    />
                </>
            }
        </View>
    );
}

export default Fallback;