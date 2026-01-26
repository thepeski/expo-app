/* @screens/Fallback/Fallback.tsx */
// loading or error screen

// react
import { ActivityIndicator, Button, Text, View } from "react-native";

// src
import { fallback } from "@constants";
import { reloadApp } from "@utils";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Fallback({ loading, error, message, action, onAction, styles, ...rest }: Props) {
    const s = makeStyles();

    return (
        <View {...rest} style={[s.container, styles?.container]}>
            {/* loading */}
            {loading && !error &&
                <>
                    <ActivityIndicator size={"large"} />
                    <Text style={[s.message, styles?.message]}>
                        {message || fallback.loadingMsg}
                    </Text>
                </>
            }

            {/* error */}
            {error && !loading &&
                <>
                    <Text style={[s.message, styles?.message]}>
                        {message || fallback.errorMsg}
                    </Text>
                    <Button
                        title={action || fallback.action}
                        onPress={onAction || reloadApp}
                    />
                </>
            }

            {/* default */}
            {((loading && error) || (!loading && !error)) &&
                <>
                    <Text style={[s.message, styles?.message]}>App Error</Text>
                    <Button title={"Reload"} onPress={reloadApp} />
                </>
            }
        </View>
    );
}

export default Fallback;