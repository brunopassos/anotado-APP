import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, ActivityIndicator, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Api } from "../../services";
import { AuthContext } from "../../context/auth";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { Button } from "../../components/Button";

import {
    Container,
    BackButton,
    TitleInput,
    DateText,
    CotentInput,
    ButtonView
} from "./styles";


export function ViewNote() {

    const showSuccessDeleteToast = () => {
        Toast.show({
          type: 'success',
          text2: 'Nota deletada com sucesso'
        });
    }

    const showErrorDeleteToast = () => {
        setIsLoadding(false);
        Toast.show({
          type: 'error',
          text1: '❌',
          text2: 'Algo deu errado. Tente novamente.'
        });
    }

    const { getUserToken } = useContext(AuthContext);

    const navigation = useNavigation();

    const windowHeigth = Dimensions.get("window").height / 2.2;

    const [buttonVisible, setButtonVisible] = useState(false);

    const [noteId, setNoteId] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [noteCreatedAt, setNoteCreatedAt] = useState("");

    const [inputBackground, setInputBackground] = useState(false);

    const [isLoadding, setIsLoadding] = useState(false);

    const {
        control,
        handleSubmit
    } = useForm();

    const handleGetNoteDataFromStorage = async () => {
        try {
            const noteId = await AsyncStorage.getItem('@note_id');
            setNoteId(noteId);
            const noteTitle = await AsyncStorage.getItem('@note_title');
            setNoteTitle(noteTitle);
            const noteContent = await AsyncStorage.getItem('@note_content');
            setNoteContent(noteContent);
            const noteCreatedAt = await AsyncStorage.getItem('@note_createdAt');
            setNoteCreatedAt(noteCreatedAt);
        } catch (error) {
            console.log("error")
        }
    }

    const handleChangeButtonVisible = () => {
        setButtonVisible(true);
        handleChangeInputBackground();
    }

    const handleChangeInputBackground = () => {
        setInputBackground(true);
    }

    const handleReturnDashboard = () => {
        navigation.navigate("Dashboard");
        getUserToken();

    }

    const handleEdit = (data) => {
        setIsLoadding(true);
        Api.patch(`/note/${noteId}`, data)
        .then(_ => setIsLoadding(false))
        .then(_ => handleReturnDashboard())
        .catch((error) => console.error(error))
    }

    const handleDelete = () => {
        setIsLoadding(true);
        Api.delete(`/note/${noteId}`)
            .then(_ => setIsLoadding(false))
            .then(_ => handleReturnDashboard())
            .then(_ => showSuccessDeleteToast())
            .catch((_) => showErrorDeleteToast())
    }

    useEffect(() => {
        handleGetNoteDataFromStorage();
    }, [])

    return (
        <Container>
            {isLoadding &&
                <ActivityIndicator size="large" color="#7D91FA" />
            }
            <BackButton activeOpacity={.7} onPress={handleReturnDashboard}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </BackButton>

            <Controller
                control={control}
                name="title"
                render={({ field: { onChange } }) => (
                    <TitleInput
                        textAlignVertical={"center"}
                        onFocus={handleChangeButtonVisible}
                        inputBackground={inputBackground}
                        defaultValue={noteTitle}
                        onChangeText={onChange}
                    />
                )}
            />

            <DateText>Criada em {noteCreatedAt}</DateText>

            <Controller
                control={control}
                name="content"
                render={({ field: { onChange } }) => (
                    <CotentInput
                        defaultValue={noteContent}
                        textAlignVertical={"top"}
                        style={{ height: windowHeigth }}
                        multiline={true}
                        numberOfLines={20}
                        maxLength={100000}
                        onFocus={handleChangeButtonVisible}
                        inputBackground={inputBackground}
                        onChangeText={onChange}
                    />
                )}
            />


            {buttonVisible &&
                <ButtonView>
                    <Button activeOpacity={.7} color="default" size="edit" onPress={handleSubmit(handleEdit)}>
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