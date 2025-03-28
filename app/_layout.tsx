import { tw } from "@/theme";
import { Slot } from "expo-router";
import { useDeviceContext } from "twrnc";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  useDeviceContext(tw);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={tw`flex-1`}>
        <BottomSheetModalProvider>
          <Slot />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
