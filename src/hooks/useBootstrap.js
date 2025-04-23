/* useBootstrap.js */
// loads data required on startup

// default imports
import { useFonts } from "expo-font";

// custom imports
import Fonts from "../constants/Fonts";

function useBootstrap() {

    // load fonts
    const [fontsLoaded, fontsError] = useFonts({
        "lato": Fonts.lato,
        "lato-i": Fonts.latoItalic,
        "lato-b": Fonts.latoBold,
        "lato-bi": Fonts.latoBoldItalic,
        "lato-bb": Fonts.latoBlack,
        "lato-bbi": Fonts.latoBlackItalic,
    });

    // resolve
    return {
        bootReady: fontsLoaded && !fontsError,
        bootError: fontsError
    };
}

export { useBootstrap };