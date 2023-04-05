import Logo from "../../../assets/note.svg";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo"


import {
    Container,
    Header,
    AppName,
    LoginRegisterView,
    LoginView,
    LoginText,
    RegisterView,
    RegisterText
} from "./styles";

export function Home({navigation}){

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

    const handleGoToLoginScreen = () => {
        console.log("login");
        navigation.navigate("Login");
    }

    const handleGoToRegisterScreen = () => {
        console.log("register");
        navigation.navigate("Register");
    }

    return(
        <Container>
            <Header>
                <Logo width={100} height={100} />
                <AppName>ANOTADO</AppName>
            </Header>
            <LoginRegisterView>
                <LoginView  onPress={handleGoToLoginScreen} activeOpacity={.5}>
                    <LoginText>
                        Log-in
                    </LoginText>
                </LoginView>
                <RegisterView  onPress={handleGoToRegisterScreen} activeOpacity={.5}>
                    <RegisterText>
                        Register
                    </RegisterText>
                </RegisterView>
            </LoginRegisterView>
        </Container>
    )
}