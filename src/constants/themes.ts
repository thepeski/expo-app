/* @constants/themes.ts */
// color themes

// define types
type ThemeModesType = keyof typeof themeModes;
type ThemesType = keyof typeof themes;
type ThemeType = typeof themes[ThemesType];

const themeModes = {
    system: "system",
    user: "user"
};

// define themes
const themes = {
    light: {
        name: "light",
        colors: {
            background: "#f2f2f2",
            buttonBg: "#006fe6",
            buttonLabel: "#f2f2f2",
            text: "#333333"
        }
    },
    dark: {
        name: "dark",
        colors: {
            background: "#000000",
            buttonBg: "#1a88ff",
            buttonLabel: "#000000",
            text: "#f2f2f2"
        }
    }
}

export { ThemeModesType, ThemesType, ThemeType, themeModes, themes };