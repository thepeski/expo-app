/* @components/Card/Card.tsx */
// card container

// react imports
import { useState, useRef, useEffect } from "react";
import { Pressable, Animated } from "react-native";

// src imports
import { useTheme } from "@hooks";
import { animations } from "@services";

// local imports
import { handlePressIn, handlePressOut } from "./functions";
import cardStyles from "./styles";
import { CardType } from "./types";

function Card({ type, onPress, styles, options, children }: CardType) {
    const { theme } = useTheme();
    const [isPressed, setIsPressed] = useState(false);
    const x = useRef(new Animated.Value(0)).current;

    // trigger on focus change
    useEffect(() => {
        animations.universal.ease(isPressed, x, options?.duration);
    }, [isPressed]);

    // resolve color type
    const colors = theme.colors.card[type ?? "default"];

    const backgroundColor = animations.card.backgroundColor(
        x, colors.background, colors.backgroundActive
    );

    const borderColor = animations.card.borderColor(
        x, colors.border, colors.borderActive
    )

    const borderWidth = options?.border?.on ? options.border.width ? options.border.width : 2 : 0;

    const shadow = animations.card.shadow(x);

    const shadowColor = options?.shadow ? colors.shadow : "transparent";

    return (

        // card wrapper
        <Pressable
            onPressIn={() => handlePressIn(() => setIsPressed(true), options?.haptics)}
            onPressOut={() => handlePressOut(() => setIsPressed(false), onPress)}
        >

            {/* card container */}
            <Animated.View style={[
                backgroundColor,
                borderColor,
                { borderWidth },
                shadow,
                { shadowColor },
                { shadowOffset: { width: 0, height: 0 } },
                cardStyles.container,
                styles?.container
            ]}>
                {children}
            </Animated.View>
        </Pressable>
    );
}

export default Card;