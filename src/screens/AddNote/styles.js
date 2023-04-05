import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    align-items: center;
    background-color: #FAFBFF;
    flex: 1;
    padding-top: ${RFValue(70)}px;
    width: 100%;
`


export const BackButton = styled.TouchableOpacity`
    width: 100%;
    padding-left: 50px;
    padding-bottom: 30px;
`


export const Header = styled.View`
    align-items: center;
`


export const ScreenTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: "Archivo_600SemiBold";
`

export const FormView = styled.View`
    align-items: center;
    width: 100%;
`

export const Input = styled.TextInput`
    background-color: #F3F5FF;
    width: 75%;
    height: ${({inputHeigth}) => inputHeigth};
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 7px;
    padding: 10px;
    font-family: "Archivo_400Regular";
`
