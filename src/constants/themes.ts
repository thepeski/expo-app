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
        colors: {
            gray: "#4b4b4b",
            blue: "#007aff",
            orange: "#e58c35",
            purple: "#5e55f0",
            green: "#77c561",
            yellow: "#f1c927",
            pink: "#dc3055",
            button: {
                default: {
                    background: "#404040",
                    backgroundActive: "#666666",
                    border: "#666666",
                    borderActive: "#8c8c8c",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                primary: {
                    background: "#006fe6",
                    backgroundActive: "#4da3ff",
                    border: "#4da3ff",
                    borderActive: "#99caff",
                    text: "#cce5ff",
                    textActive: "#e6f2ff"
                },
                secondary: {
                    background: "#e2801d",
                    backgroundActive: "#edb378",
                    border: "#edb378",
                    borderActive: "#f6d9bb",
                    text: "#f9e6d2",
                    textActive: "#fcf2e8"
                },
                third: {
                    background: "#4c43ef",
                    backgroundActive: "#8f8af5",
                    border: "#8f8af5",
                    borderActive: "#d2d0fb",
                    text: "#d2d0fb",
                    textActive: "#e9e8fd"
                },
                success: {
                    background: "#6ec157",
                    backgroundActive: "#9fd68f",
                    border: "#9fd68f",
                    borderActive: "#cfeac7",
                    text: "#dff1da",
                    textActive: "#eff8ec"
                },
                warning: {
                    background: "#f0c30f",
                    backgroundActive: "#f6db6f",
                    border: "#f6db6f",
                    borderActive: "#faedb7",
                    text: "#fdf9e7",
                    textActive: "#ffffff"
                },
                error: {
                    background: "#da254c",
                    backgroundActive: "#e56682",
                    border: "#e56682",
                    borderActive: "#f0a8b7",
                    text: "#f8d3db",
                    textActive: "#fbe9ed"
                }
            },
            card: {
                default: {
                    background: "#f8f8f8",
                    backgroundActive: "#fbfbfb",
                    border: "#ffffff",
                    borderActive: "#ffffff",
                    shadow: "#000000"
                }
            },
            textInput: {
                default: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#4b4b4b",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                primary: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#007aff",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                secondary: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#e58c35",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                third: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#5e55f0",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                success: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#77c561",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                warning: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#f1c927",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                },
                error: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#8c8c8c",
                    borderActive: "#dc3055",
                    placeholder: "#8c8c8c",
                    text: "#262626",
                    textActive: "#000000"
                }
            }
        }
    },
    dark: {
        name: "dark",
        colors: {
            gray: "#4b4b4b",
            blue: "#007aff",
            orange: "#e58c35",
            purple: "#5e55f0",
            green: "#77c561",
            yellow: "#f1c927",
            pink: "#dc3055",
            button: {
                default: {
                    background: "#595959",
                    backgroundActive: "#878787",
                    border: "#878787",
                    borderActive: "#a6a6a6",
                    text: "#0d0d0d",
                    textActive: "#1a1a1a"
                },
                primary: {
                    background: "#1a88ff",
                    backgroundActive: "#66b0ff",
                    border: "#66b0ff",
                    borderActive: "#b3d7ff",
                    text: "#000c1a",
                    textActive: "#001933"
                },
                secondary: {
                    background: "#e8994a",
                    backgroundActive: "#f0bf8e",
                    border: "#f0bf8e",
                    borderActive: "#f9e6d2",
                    text: "#170d03",
                    textActive: "#2d1a06"
                },
                third: {
                    background: "#625bf1",
                    backgroundActive: "#a5a1f7",
                    border: "#a5a1f7",
                    borderActive: "#e9e8fd",
                    text: "#030217",
                    textActive: "#06042f"
                },
                success: {
                    background: "#7ec86a",
                    backgroundActive: "#afdda2",
                    border: "#afdda2",
                    borderActive: "#dff1da",
                    text: "#091307",
                    textActive: "#13250e"
                },
                warning: {
                    background: "#f3cf3f",
                    backgroundActive: "#f7e187",
                    border: "#f7e187",
                    borderActive: "#fcf3cf",
                    text: "#181302",
                    textActive: "#302703"
                },
                error: {
                    background: "#de3b5e",
                    backgroundActive: "#e97c94",
                    border: "#e97c94",
                    borderActive: "#f4bec9",
                    text: "#160408",
                    textActive: "#2c070f"
                }
            },
            card: {
                default: {
                    background: "#0a0a0a",
                    backgroundActive: "#0d0d0d",
                    border: "#131313",
                    borderActive: "#191919",
                    shadow: "#ffffff"
                }
            },
            textInput: {
                default: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#8c8c8c",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                primary: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#007aff",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                secondary: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#e58c35",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                third: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#5e55f0",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                success: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#77c561",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                warning: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#f1c927",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                },
                error: {
                    background: "transparent",
                    backgroundActive: "transparent",
                    border: "#4b4b4b",
                    borderActive: "#dc3055",
                    placeholder: "#4b4b4b",
                    text: "#e6e6e6",
                    textActive: "#f2f2f2"
                }
            }
        }
    }
};

export { ThemeModesKeyType, ThemesKeyType, ThemeType, themeModes, themes };