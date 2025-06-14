/* @views/TabView/TabView.tsx */
// custom tab view nagivation

// react imports
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// expo imports
import { useRouter, useSegments } from "expo-router";

// local imports
import { tabViewStyles } from "./styles";
import TabButton from "./TabButton";
import { TabViewType } from "./types";

function TabView({ tabs, styles, options, children }: TabViewType) {
    const router = useRouter();
    const activePath = useSegments().join("/");
    const { bottom } = useSafeAreaInsets();

    return (

        // tab view container
        <View style={[tabViewStyles.container, styles?.container]}>

            {/* tab view content */}
            <View style={[tabViewStyles.content, styles?.content]}>{children}</View>

            {/* tab bar container */}
            <View style={[{ paddingBottom: bottom }, tabViewStyles.tabBar, styles?.tabBar]}>

                {/* tab bar buttons */}
                {tabs.map((tab) => {
                    return (
                        <TabButton
                            key={tab.path}
                            isActive={activePath === tab.path}
                            active={{
                                label: tab.active?.label,
                                icon: tab.active?.icon
                            }}
                            inactive={{
                                label: tab.inactive?.label,
                                icon: tab.inactive?.icon
                            }}
                            onPressProps={{
                                router: router,
                                activePath: activePath,
                                path: tab.path,
                                options: options
                            }}
                            styles={{
                                tab: styles?.tab,
                                tabLabel: styles?.tabLabel,
                                tabIcon: styles?.tabIcon
                            }}
                        />
                    );
                })}
            </View>

        </View>
    );
}

export default TabView;