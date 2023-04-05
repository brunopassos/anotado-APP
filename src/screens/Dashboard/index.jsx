import { ScrollView, ActivityIndicator } from "react-native";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoutSvg from "../../../assets/logout.svg";

import { FabButton } from "../../components/FabButton";
import { Note } from "../../components/Note";


import {
    Container,
    Header,
    LogoutButton,
    ScreenTitle,
    NotesNumber,
    FilterView,
    TextFilter,
    NoContentView,
    NoContentText
} from "./styles";

export function Dashboard(){

    const navigation = useNavigation();

    const { handleLogout, isLoadding, getUserToken, setIsLoadding, userNotes } = useContext(AuthContext);   

    const handleViewNote = (note) => {
        handleStoreData(note)
        navigation.navigate("ViewNote");
    }

    const handleStoreData = async (note) => {
        try {
            await AsyncStorage.setItem('@note_id', note.id)
            if(note.title){
                await AsyncStorage.setItem('@note_title', note.title)
            }else{
                await AsyncStorage.removeItem('@note_title')
            }
            await AsyncStorage.setItem('@note_content', note.content)
            await AsyncStorage.setItem('@note_createdAt', note.createdAt)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setIsLoadding(true)        
        getUserToken();
    },[])

    return(
        <Container>
            <Header>
                <LogoutButton activeOpacity={.3} onPress={handleLogout}>
                    <LogoutSvg width={40} height={40}/>
                </LogoutButton>
                <ScreenTitle>Minhas Anotações</ScreenTitle>
                <NotesNumber>{userNotes.length} notas</NotesNumber>
                <FilterView>
                    <TextFilter/>
                </FilterView>
            </Header>

            {isLoadding &&
            <ActivityIndicator size="large" color="#7D91FA" />
            }

            {userNotes.length != 0 ?
            
            <ScrollView showsVerticalScrollIndicator={false}>
                {userNotes.map((note) => (
                    <Note key={note.id} createdAt={note.createdAt} content={note.content} title={note.title} onPress={() => handleViewNote(note)}/>
                ))}
            </ScrollView>

            :

            <NoContentView>
                <NoContentText>
                    Nenhuma nota aqui ainda
                </NoContentText>
            </NoContentView>
            
            }

            <FabButton/>
        </Container>
    )
}