import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function QR() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setScannedData(false);
  }, []);

  useEffect(() => {
    if (scannedData) {
      router.push("/checkIn");
    }
  }, [scannedData]);

  if (!permission?.granted) {
    return (
      <View>
        <Button title="Anfrgaen" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className=" flex-1 z-20 relative">
        <CameraView
          onBarcodeScanned={() => {
            if (!scannedData) {
              setScannedData(true);
            }
          }}
          style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}
          className="flex-1"
          facing={"back"}
        />
        <View className="absolute top-[13%] text-center mx-auto  z-20 left-0 right-0 ">
          <Text className="text-white text-center">
            Bitte scann den QR-Code um einzuchecken.
          </Text>
        </View>
        <View className="absolute top-[0] bottom-[82%] left-0 right-0 bg-black/70" />
        <View className="absolute top-[18%] bottom-[52%] left-[80%] right-0 bg-black/70" />
        <View className="absolute top-[18%] bottom-[52%] left-[0] right-[80%] bg-black/70" />
        <View className="absolute top-[48%] bottom-[0] left-0 right-0 bg-black/70" />
      </View>
    </View>
  );
}
