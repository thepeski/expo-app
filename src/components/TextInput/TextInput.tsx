/* @components/TextInput/TextInput.tsx */
// custom text input box

// react imports
import { useState, useRef, useEffect } from "react";
import { TextInput as RNTextInput, Animated } from "react-native";

// src imports
import { useTheme } from "@hooks";
import { animations } from "@services";

// local imports
import handleFocus from "./functions";
import textInputStyles from "./styles";
import { TextInputType } from "./types";

function TextInput({ placeholder, type, value, onChangeText, styles, options }: TextInputType) {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const x = useRef(new Animated.Value(0)).current;

    // trigger on focus change
    useEffect(() => {
        animations.universal.ease(isFocused, x, options?.duration);
    }, [isFocused]);

    // resolve color type
    const colors = theme.colors.textInput[type ?? "default"];

    const backgroundColor = animations.forms.backgroundColor(
        x, colors.background, colors.backgroundActive
    );

    const borderColor = animations.forms.borderColor(
        x, colors.border, colors.borderActive
    );

    const placeholderColor = colors.placeholder;

    const textColor = isFocused ? colors.textActive : colors.text;

    return (
        <Animated.View style={[
            backgroundColor,
            borderColor,
            textInputStyles.container,
            styles?.container
        ]}>
            {options?.password ? (
                <RNTextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}
                    value={value}
                    keyboardType={options.keyboard}
                    autoCapitalize={options.autocapitalize}
                    autoCorrect={options.autocorrect}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus(() => setIsFocused(true), options.haptics)}
                    onBlur={() => setIsFocused(false)}
                    style={[{ color: textColor }, textInputStyles.label, styles?.input]}
                    secureTextEntry
                />
            ) : (
                <RNTextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}
                    value={value}
                    keyboardType={options?.keyboard}
                    autoCapitalize={options?.autocapitalize}
                    autoCorrect={options?.autocorrect}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus(() => setIsFocused(true), options?.haptics)}
                    onBlur={() => setIsFocused(false)}
                    style={[{ color: textColor }, textInputStyles.label, styles?.input]}
                />
            )}
        </Animated.View>
    );
}

export default TextInput;