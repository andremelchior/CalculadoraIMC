import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
          <Tabs screenOptions={{ tabBarActiveTintColor: "Blue" }}>
              <Tabs.Screen
                  name="index"
                  options={{
                      title: "Inicio",
                      tabBarIcon: ({ color, size }) => (
                          <Ionicons
                              name="home-outline"
                              size={size}
                              color={color}
                          />
                      ),
                  }}
              />
          </Tabs>
  );
}
    