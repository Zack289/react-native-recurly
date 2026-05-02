import "@/global.css";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold text-primary">Home</Text>

      <Link href='/onboarding' className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Onboarding</Link>
      <Link href='/(auth)/signIn' className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Onboarding</Link>
      <Link href='/(auth)/signUp' className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to Onboarding</Link>
    </SafeAreaView>
  );
}
