import { Tabs, useRouter } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#19818E",
        tabBarInactiveTintColor: "#989898",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Startseite",
          tabBarLabelStyle: { fontSize: 12 },
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          headerShown: false,
          title: "Sessions",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("Jap");
            router.push("/qrModal"); // <-- Here you put the name where the chat component is declared
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: () => <></>,
          tabBarIcon: () => (
            <View className="relative h-[40px] w-[80px] ">
              <View className="bg-[#19818E] h-[50px] top-2 ml-4 rounded-xl w-[50px] flex justify-center items-center absolute">
                <AntDesign
                  className="z-20"
                  name="qrcode"
                  size={35}
                  color="white"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="online"
        options={{
          headerShown: false,
          title: "Online",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <Foundation name="play-video" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fortschritt"
        options={{
          headerShown: false,
          title: "Fortschritt",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-line" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
