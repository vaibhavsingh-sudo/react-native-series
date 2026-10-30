import { Stack } from "expo-router";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"

export default function RootLayout() {
  return (
  <SafeAreaView>
     <View>
      <Text>index</Text>
    </View>
  </SafeAreaView>
  );
}
