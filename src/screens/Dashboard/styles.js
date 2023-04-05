import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: #FAFBFF;
    padding-bottom: 30px;
    width: 100%;
`


export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${RFValue(40)}px;
`


export const LogoutButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: flex-end;
    margin-right: 60px;
`


export const ScreenTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: "Archivo_600SemiBold";
`


export const NotesNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: "Archivo_400Regular";
`

export const FilterView = styled.View`
    width: 100%;
    height: ${RFValue(90)}px;
    align-items: center;
    justify-content: flex-end;
`


export const TextFilter = styled.TextInput`
    background-color: #E4E9FF;
    width: ${Dimensions.get("window").width / 1.2}px;
    height: ${RFValue(41)}px;
    border-radius: 7px;
    font-family: "Archivo_400Regular";
    font-size: ${RFValue(15)}px;
    padding-left: 15px;
`

export const NoContentView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const NoContentText = styled.Text`
    opacity: .5;
`