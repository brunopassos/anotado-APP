import {
    Container,
    ButtonText
} from "./styles";

export function Button({ children, color, size, onPress, activeOpacity}){
    return(
        <Container activeOpacity={activeOpacity} color={color} size={size} onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </Container>
    )
}