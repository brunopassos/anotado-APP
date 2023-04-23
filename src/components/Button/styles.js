import styled, { css } from "styled-components/native";


export const Container = styled.TouchableOpacity`

    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-top: 20px;  

    ${({color}) => {
        switch(color){

            case "default":
                return css`
                    background-color: #7D91FA;
                `

            case "delete":
                return css`
                    background-color: #FA3A3A;
                `

            default:
                return false;
        }
    }};

    ${({size}) => {
        switch(size){

            case "default":
                return css`
                    width: 75%;
                    height: 41px;
                `

            case "register_login":
                return css`
                    width: 317px;
                    height: 41px;
                `

            case "edit":
                return css`
                    width: 180px;
                    height: 41px;
                `
            case "delete":
                return css`
                    width: 92px;
                    height: 41px;
                `
            
            default:
                return false;
        }
    }};
  
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-family: "Archivo_400Regular";
`