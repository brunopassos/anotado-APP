import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
} from "./styles";


export function FabButton(){

    const navigation = useNavigation();

    const handleAddNote = () => {
        navigation.navigate("AddNote")
    }

    return(
        <Container style={style.container}>
            <TouchableOpacity onPress={handleAddNote}>
                <View>
                    <AntDesign 
                        name="plus"
                        size={24}
                        color="#FFF"
                    />
                </View>
            </TouchableOpacity>
        </Container>
    )
}

const style = StyleSheet.create({
    container: {
        elevation: 5
    }
})