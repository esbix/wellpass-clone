import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="qrModal"
        options={{
          headerShown: true,
          presentation: "card",
          title: "Check-In",
          headerBackTitle: "Zurück",
        }}
      />
      <Stack.Screen
        name="checkIn"
        options={{
          headerShown: true,
          presentation: "card",
          title: "Check-In Ticket",
          headerBackTitle: "Zurück",
        }}
      />
    </Stack>
  );
}
