import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function online() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white relative">
        <Image
          source={require("../../assets/images/online.jpeg")}
          className="absolute inset-0 object-cover"
          contentFit="cover"
          style={{ height: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
}
