import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const BackButton = styled.TouchableOpacity`
    width: 100%;
    padding-left: 50px;
    padding-bottom: 30px;
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

export const Form = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const InputText = styled.TextInput`
    font-family: "Archivo_400Regular";
    width: 317px;
    height: 41px;
    border-radius: 7px;
    background-color: #DDE2FC;
    margin-bottom: 10px;
    padding-left: 10px;
`