import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: ${Dimensions.get("window").width / 1.2}px;
    margin-top: 25px;
    border-radius: 7px; 
    background-color: beige;
    margin-bottom: 15px;
    padding: 10px 20px;
`
export const Title = styled.Text`
        
`

export const CreatedAt = styled.Text`
    font-family: "Archivo_400Regular";
    font-size: ${RFValue(8)}px;
    margin-bottom: 15px;
`


export const Content = styled.Text`
    font-family: "Archivo_400Regular";
    font-size: ${RFValue(15)}px;
`
