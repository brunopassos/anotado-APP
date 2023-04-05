import { ScrollView, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";

import { Note } from "../../components/Note";

import { AuthContext } from "../../context/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';


import LogoutSvg from "../../../assets/logout.svg";
import { FabButton } from "../../components/FabButton";
import { Api } from "../../services";


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

    const { handleLogout, isLoadding, getUserNotes, setIsLoadding, userNotes } = useContext(AuthContext);   

    useEffect(() => {
        setIsLoadding(true)
        const getUserToken = async () => {
            const TOKEN = await AsyncStorage.getItem("@anotado_userToken")
            getUserNotes(TOKEN);
        }
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