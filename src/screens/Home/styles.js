import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(50)}px;
`

export const AppName = styled.Text`
    margin-top: 20px;
    font-size: ${RFValue(32)}px;
    font-family: "Archivo_400Regular";
`

export const LoginRegisterView = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const LoginView = styled.TouchableOpacity`
    width: 200px;
    height: 52px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const LoginText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: "Archivo_400Regular";
    text-decoration: underline;
`


export const RegisterView = styled.TouchableOpacity`
    width: 200px;
    height: 52px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`


export const RegisterText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: "Archivo_400Regular";
    text-decoration: underline;
`

