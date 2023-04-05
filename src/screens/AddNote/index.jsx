import { useContext, useState } from "react";
import { Dimensions } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { Ionicons} from "@expo/vector-icons";

import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";

import Toast from 'react-native-toast-message';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Api } from "../../services";
import { AuthContext } from "../../context/auth";

import {
    Container,
    BackButton,
    Header,
    ScreenTitle,
    FormView,
    Input,
} from "./styles";

export function AddNote(){

    const { userNotes, setUserNotes } = useContext(AuthContext); 

    const showErrorContentFieldToast = () => {
        Toast.show({
          type: 'error',
          text2: '❌ O campo de conteúdo não pode ficar em branco.'
        });
    }

    const navigation = useNavigation();    

    const windowHeigth = Dimensions.get("window").height / 2.2;

    const [isLoadding, setIsLoadding] = useState(false);

    const {
        control,
        handleSubmit
    } = useForm();

    const handleAddNote = async (data) => {

        checkFields(data);

        const TOKEN = await AsyncStorage.getItem("@anotado_userToken");

        setIsLoadding(true);

        Api.post("/note", data, {
            headers: {
                "Authorization" : `Bearer ${TOKEN}`
            }
        })
        .then((res) => setUserNotes([...userNotes, res.data]))
        .then((_) => navigation.navigate("Dashboard"))
        .catch(err => console.error(err));
    }

    const checkFields = (data) => {
        if(!data.content){
            showErrorContentFieldToast();
        }
    }

    const handleReturnDashboard = () => {
        navigation.navigate("Dashboard");
    }


    return(
        <Container>
            <BackButton activeOpacity={.7} onPress={handleReturnDashboard}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </BackButton>
            <Header>
                <ScreenTitle>Nova Anotação</ScreenTitle>
            </Header>

            <FormView>
                <Controller 
                    control={control}
                    name="title"
                    render={({field: {onChange}}) => (
                        <Input 
                            inputHeigth={`50px`}
                            placeholder="Título"
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="content"
                    render={({field: {onChange}}) => (
                        <Input 
                            inputHeigth={`${windowHeigth}px`}
                            multiline={true}
                            numberOfLines={20}
                            maxLength={100000}
                            textAlignVertical={"top"}
                            placeholder="Digite aqui a sua anotação"
                            onChangeText={onChange}
                        />
                    )}
                />
            </FormView>

            <Button activeOpacity={.7} color="default" size="default" onPress={handleSubmit(handleAddNote)}>
                Salvar
            </Button>            
        </Container>
    )
}