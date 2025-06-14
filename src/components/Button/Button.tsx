/* @components/Button/Button.tsx */

// react imports
import { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Animated } from "react-native";

// src imports
import { useTheme } from "@hooks";
import { animations } from "@services";

// local imports
import { handlePress, renderIcon } from "./functions";
import buttonStyles from "./styles";
import { ButtonType } from "./types";

function Button({ label, type, icon, onPress, styles, options }: ButtonType) {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState(false);
    const x = useRef(new Animated.Value(0)).current;

    // trigger on focus change
    useEffect(() => {
        animations.forms.ease(isActive, x, options?.duration);
    }, [isActive]);

    // resolve color type
    const colors = theme.colors.button[type ?? "default"];

    const backgroundColor = animations.forms.backgroundColor(
        x, colors.background, colors.backgroundActive
    );

    const borderColor = animations.forms.borderColor(
        x, colors.border, colors.borderActive
    )

    const borderWidth = options?.border?.on ? options.border.width ? options.border.width : 2 : 0;

    const textColor = animations.forms.color(
        x, colors.text, colors.textActive
    )

    return (

        // button wrapper
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsActive(true)}
            onPressOut={() => setIsActive(false)}
            onPress={() => handlePress(onPress, options?.haptics)}
        >

            {/* button container */}
            <Animated.View
                style={[
                    { borderWidth },
                    backgroundColor,
                    borderColor,
                    buttonStyles.container,
                    styles?.container]}
            >
                {/* button label */}
                {label &&
                    <Animated.Text style={[textColor, buttonStyles.label, styles?.label]}>
                        {label}
                    </Animated.Text>
                }

                {/* button icon */}
                {icon && renderIcon(isActive, icon)}
            </Animated.View>
        </TouchableOpacity>
    );
}

export default Button;