import { useCallback } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { Routes } from "./src/routes";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo"

import {
  Container
} from "./styles";

export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container  onLayout={onLayoutRootView}>
      <Routes/>
    </Container>
  );
}
