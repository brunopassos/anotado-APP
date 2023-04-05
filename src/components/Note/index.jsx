import { StyleSheet } from "react-native";

import {
    Container,
    Title,
    CreatedAt,
    Content
} from "./styles";

export function Note({content, createdAt, title, onPress}){

    
   
    return(
        <Container style={style.container} onPress={onPress}>
            {title && 
                <Title>
                    {title}
                </Title>
            }
            <CreatedAt>
                Criado: {createdAt} 
            </CreatedAt>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

const style = StyleSheet.create({
    container:{
        elevation: 1
    }
})
