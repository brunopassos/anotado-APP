import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { 
  Container
} from "./styles";


import { Dashboard } from './src/screens/Dashboard';
import { AddNote } from "./src/screens/AddNote";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo"
import { ViewNote } from "./src/screens/ViewNote";

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
    <Container onLayout={onLayoutRootView}>
      {/* <Dashboard/> */}
      {/* <AddNote/> */}
      <ViewNote/>
    </Container>
  );
}