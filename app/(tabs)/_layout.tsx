import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import { clsx } from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { components, colors } from "@/constants/theme";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {" "}
      {/* <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
    <Tabs.Screen name="insights" options={{ title: "Insights" }} />
    <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} /> */}
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
