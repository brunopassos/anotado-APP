import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { 
  Container
} from "./styles";


import { Dashboard } from './src/screens/Dashboard';
import { AddNote } from "./src/screens/AddNote";
import { ViewNote } from "./src/screens/ViewNote";
import { Home } from "./src/screens/Home";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo"
import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Register";


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
      {/* <ViewNote/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      <Register/>
    </Container>
  );
}