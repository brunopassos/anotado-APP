import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    padding-top: ${RFValue(70)}px;
    background-color: #FAFBFF;
    flex: 1;
`


export const BackButton = styled.TouchableOpacity`
    width: 100%;
    padding-left: 50px;
    padding-bottom: 30px;
`


export const TitleInput = styled.TextInput`
    width: 75%;
    height: 60px;
    font-family: "Archivo_600SemiBold";
    font-size: ${RFValue(25)}px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 7px;
    background-color: ${props => props.inputBackground ? "#F3F5FF" : "#FAFBFF"};
`


export const DateText = styled.Text`
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 12px;
    font-family: "Archivo_400Regular";
`


export const CotentInput = styled.TextInput`
    width: 75%;
    font-family: "Archivo_400Regular";
    font-size: ${RFValue(15)}px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 7px;
    background-color: ${props => props.inputBackground ? "#F3F5FF" : "#FAFBFF"};;

`


export const ButtonView = styled.View`
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

