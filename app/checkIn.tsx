import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { DateTime } from "luxon";
import { useLocationStore } from "@/store/store";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";

export default function checkIn() {
  const [visable, setVisable] = useState(true);

  const opacitiy = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacitiy.value,
  }));

  useEffect(() => {
    opacitiy.value = withRepeat(
      withTiming(1, { duration: 500 }),
      -1,
      true,
      () => {},
      ReduceMotion.System
    );
  }, []);

  const { selectedLocation } = useLocationStore();

  return (
    <View className="flex-1 bg-white">
      <View className="justify-center items-center mt-8 z-30">
        <View className="bg-white h-[210px] w-[210px] rounded-full justify-center items-center">
          <Image
            priority={"high"}
            style={{ height: 200, width: 200 }}
            className="h-56 w-56"
            source={require("../assets/images/me.png")}
          />
        </View>
      </View>
      <View className="bg-[#19818E] pb-8 -translate-y-[100px] z-0 w-[87%] mx-auto bg-gradient-to-r rounded-2xl">
        <View className="h-[100px]" />
        <View className="">
          <View className="justify-between flex-row px-8 pt-4">
            <View>
              <Text className="text-white">Mitglied</Text>
              <Text className="text-white font-bold mt-2 text-xl">
                Marius Klingl
              </Text>
            </View>
            <View className="mr-12">
              <Text className="text-white">Status</Text>
              <Animated.View
                style={[animatedStyle]}
                className="bg-[#00E976] px-3 mt-1 py-1 rounded-lg"
              >
                <Text className="uppercase text-lg font-bold font-[#19818E]">
                  checked-in
                </Text>
              </Animated.View>
            </View>
          </View>
          <View className="justify-between mt-8 flex-row px-8 pb-8">
            <View>
              <Text className="text-white">Datum</Text>
              <Text className="text-white font-bold mt-2 text-xl">
                {DateTime.now().toFormat("dd.LL.yy")}
              </Text>
            </View>
            <View className="mr-[90px]">
              <Text className="text-white">Zeit</Text>
              <Text className="text-white font-bold mt-2 text-xl">
                {DateTime.now().toFormat("HH:mm")}
              </Text>
            </View>
          </View>
          <View style={[{ height: 1, overflow: "hidden" }]}>
            <View
              style={[
                {
                  height: 2,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderStyle: "dashed",
                },
              ]}
            ></View>
          </View>
          <View className="px-8 py-4">
            <View>
              <Text className="text-white">Netzwerkpartner</Text>
              <Text className="text-white font-bold mt-2 text-xl">
                {selectedLocation?.name}
              </Text>
              <Text className="text-white text-lg">
                {selectedLocation?.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="h-16 w-16 bg-white rounded-full mx-auto -translate-y-[125px]" />
    </View>
  );
}
