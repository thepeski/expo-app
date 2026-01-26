/* @constants/fonts/fonts.ts */
// custom fonts

const fonts = {
    // lato
    lato: { name: "lato", path: require("@fonts/lato/lato.ttf") },
    latoItalic: { name: "latoItalic", path: require("@fonts/lato/latoItalic.ttf") },
    latoThin: { name: "latoThin", path: require("@fonts/lato/latoThin.ttf") },
    latoThinItalic: { name: "latoThinItalic", path: require("@fonts/lato/latoThinItalic.ttf") },
    latoLight: { name: "latoLight", path: require("@fonts/lato/latoLight.ttf") },
    latoLightItalic: { name: "latoLightItalic", path: require("@fonts/lato/latoLightItalic.ttf") },
    latoBold: { name: "latoBold", path: require("@fonts/lato/latoBold.ttf") },
    latoBoldItalic: { name: "latoBoldItalic", path: require("@fonts/lato/latoBoldItalic.ttf") },
    latoBlack: { name: "latoBlack", path: require("@fonts/lato/latoBlack.ttf") },
    latoBlackItalic: { name: "latoBlackItalic", path: require("@fonts/lato/latoBlackItalic.ttf") },

    // merriweather
    merriweather: { name: "merriweather", path: require("@fonts/merriweather/merriweather.ttf") },
    merriweatherItalic: {
        name: "merriweatherItalic",
        path: require("@fonts/merriweather/merriweatherItalic.ttf"),
    },

    // inter
    inter: { name: "inter", path: require("@fonts/inter/inter.ttf") },
    interItalic: { name: "interItalic", path: require("@fonts/inter/interItalic.ttf") },
} as const;

export { fonts };