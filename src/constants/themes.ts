/* @constants/themes.ts */
// color themes

type ThemeModesKeyType = keyof typeof themeModes;
type ThemesKeyType = keyof typeof themes;
type ThemeType = typeof themes[ThemesKeyType];

const themeModes = {
    system: "system",
    user: "user"
};

const themes = {
    light: {
        name: "light",
        colors: {}
    },
    dark: {
        name: "dark",
        colors: {}
    }
};

export { ThemeModesKeyType, ThemesKeyType, ThemeType, themeModes, themes };