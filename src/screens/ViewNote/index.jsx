import { useState } from "react";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Button } from "../../components/Button";

import {
    Container,
    BackButton,
    TitleInput,
    DateText,
    CotentInput,
    ButtonView
} from "./styles";

export function ViewNote(){

    const windowHeigth = Dimensions.get("window").height / 2.2;

    const [buttonVisible, setButtonVisible] = useState(false);

    const [inputBackground, setInputBackground] = useState(false);

    const handleChangeButtonVisible = () => {
        setButtonVisible(true);
        handleChangeInputBackground();
    }

    const handleChangeInputBackground = () => {
        setInputBackground(true);
    }

    const handleReturnDashboard = () => {
        console.log("return");
    }

    const handleEdit = () => {
        console.log("editado")
    }

    const handleDelete = () => {
        console.log("deletado")
    }

    return(
        <Container>
            <BackButton activeOpacity={.7} onPress={handleReturnDashboard}>
                <Ionicons name="chevron-back" size={24} color="black"/>
            </BackButton>
            <TitleInput 
                textAlignVertical={"center"}
                onFocus={handleChangeButtonVisible}
                inputBackground={inputBackground}
                defaultValue="titulo teste"
            />
            <DateText>Data</DateText>
            <CotentInput
                defaultValue="conteúdo teste"
                textAlignVertical={"top"}
                style={{height: windowHeigth}}
                multiline={true}
                numberOfLines={20}
                maxLength={100000}
                onFocus={handleChangeButtonVisible}
                inputBackground={inputBackground}
            />

            {buttonVisible && 
                <ButtonView>
                    <Button activeOpacity={.7} color="default" size="edit" onPress={() => handleEdit()}>
                        Atualizar
                    </Button>
                    <Button activeOpacity={.7} color="delete" size="delete" onPress={() => handleDelete()}>
                        Deletar
                    </Button>
                </ButtonView>
            }
        </Container>
    )
}