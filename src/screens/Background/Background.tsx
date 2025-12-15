/* @screens/Background/Background.tsx */
// screen with background colour or image

// react
import { ImageBackground } from "react-native";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Background({ color, source, resizeMode, styles, children }: Props) {
    const screenStyles = makeStyles(color);

    return (
        <ImageBackground
            source={source}
            resizeMode={resizeMode}
            style={[screenStyles.container, styles]}
        >
            {children}
        </ImageBackground>
    );
}

export default Background;