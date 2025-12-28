import { useLocationStore } from "@/store/store";
import { Image } from "expo-image";
import React from "react";
import { Button, Dimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function fortschritt() {
  const { locations, selectLocation, selectedLocation } = useLocationStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className=" bg-white relative">
        <Image
          source={require("../../assets/images/fortschritt.jpeg")}
          className="absolute inset-0 object-cover"
          contentFit="cover"
          style={{ height: Dimensions.get("screen").height * 0.85 }}
        />
        <View className="h-32" />
        <View className="p-8">
          <Text>{selectedLocation?.name}</Text>
          <Text>{selectedLocation?.address}</Text>
          <View className="mt-8">
            {locations.map((location, index) => (
              <Button
                color={"red"}
                key={index}
                onPress={() => selectLocation(location)}
                title={location.name}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
