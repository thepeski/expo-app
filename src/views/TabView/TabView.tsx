/* @views/TabView/TabView.tsx */
// custom tab layout

// react imports
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// expo imports
import { useRouter, useSegments } from "expo-router";

// local imports
import { handlePress } from "./functions";
import tabViewStyles from "./styles";
import TabButton from "./TabButton";
import { TabViewType } from "./types";

function TabView({ tabs, styles, options, children }: TabViewType) {
    const router = useRouter();

    // track current route path
    const activePath = useSegments().join("/");

    // track bottom safe area bound
    const { bottom } = useSafeAreaInsets();

    return (

        // tab view container
        <View style={[tabViewStyles.container, styles?.container]}>

            {/* tab view content */}
            <View style={[tabViewStyles.content, styles?.content]}>{children}</View>

            {/* tab bar container */}
            <View style={{
                paddingBottom: bottom,
                ...tabViewStyles.tabContainer,
                ...styles?.tabContainer
            }}>

                {/* tab bar buttons */}
                {tabs.map((tab) => {
                    return (
                        <TabButton
                            key={tab.path}
                            label={tab.label}
                            isActive={activePath === tab.path}
                            onPress={() => handlePress(
                                router,
                                activePath,
                                tab.path,
                                options?.haptics
                            )}
                            activeColor={tab.activeColor}
                            inactiveColor={tab.inactiveColor}
                            icon={tab.icon}
                            iconActive={tab.iconActive}
                            iconImage={tab.iconImage}
                            iconImageActive={tab.iconImageActive}
                            iconImageColors={tab.iconImageColors}
                            iconImageSize={tab.iconImageSize}
                            styles={{
                                tab: styles?.tab,
                                tabIcon: styles?.tabIcon,
                                tabLabel: styles?.tabLabel
                            }}
                            options={options}
                        />
                    );
                })}
            </View>
        </View>
    );
}

export default TabView;