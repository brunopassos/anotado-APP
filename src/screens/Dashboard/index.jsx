import { ScrollView, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
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

    const [search, setSearch] = useState("");

    const [filteredNotes, setFilteredNotes] = useState([]);

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

    const handleFilterNotes = (e) => {
        const filtered = userNotes.filter((item) => {
          const title = item.title || '';
          const content = item.content || '';
      
          return (
            title.toLowerCase().includes(e.toLowerCase()) || 
            content.toLowerCase().includes(e.toLowerCase())
          );
        });
      
        setFilteredNotes(filtered);
      }

    return(
        <Container>
            <Header>
                <LogoutButton activeOpacity={.3} onPress={handleLogout}>
                    <LogoutSvg width={40} height={40}/>
                </LogoutButton>
                <ScreenTitle>Minhas Anotações</ScreenTitle>
                <NotesNumber>
                    {
                        filteredNotes.length === 0 ? userNotes.length : filteredNotes.length
                    } nota(s)
                </NotesNumber>
                <FilterView>
                    <TextFilter placeholder="Filtro" onChangeText={(e) => handleFilterNotes(e)}/>
                </FilterView>
            </Header>

            {isLoadding &&
            <ActivityIndicator size="large" color="#7D91FA" />
            }

            {userNotes.length != 0 ?
            
            <ScrollView showsVerticalScrollIndicator={false}>

                {
                
                filteredNotes.length === 0 ? 
                
                userNotes.map((note) => {
                    let date = new Date(note.createdAt);
                    let dateFormated = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
                    return <Note key={note.id} createdAt={dateFormated} content={note.content} title={note.title} onPress={() => handleViewNote(note)}
                    />
                })

                :
                filteredNotes.map((note) => {
                    let date = new Date(note.createdAt);
                    let dateFormated = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
                    return <Note key={note.id} createdAt={dateFormated} content={note.content} title={note.title} onPress={() => handleViewNote(note)}
                    />
                })
                }
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