import { ScrollView, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import LogoutSvg from "../../../assets/logout.svg";

import { FabButton } from "../../components/FabButton";
import { Note } from "../../components/Note";

let dateFormated;

import {
    Container,
    Header,
    LogoutButton,
    ScreenTitle,
    FilterView,
    TextFilter,
    NoContentView,
    NoContentText
} from "./styles";

export function Dashboard(){

    const showSuccessLogoutToast = () => {
        Toast.show({
          type: 'success',
          text1: '👋',
          text2: 'Até breve.'
        });
    }

    const userLogout = () => {
        handleLogout();
        showSuccessLogoutToast();
    }

    const [search, setSearch] = useState("");

    const navigation = useNavigation();

    const { handleLogout, isLoadding, getUserToken, setIsLoadding, userNotes } = useContext(AuthContext);   

    const handleViewNote = (note) => {
        handleStoreData(note, dateFormated)
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
            await AsyncStorage.setItem('@note_createdAt', dateFormated)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setIsLoadding(true)        
        getUserToken();
    },[])


    return(
        
            !isLoadding &&
            
            <Container>
            <Header>
                <LogoutButton activeOpacity={.3} onPress={userLogout}>
                    <LogoutSvg width={40} height={40}/>
                </LogoutButton>
                <ScreenTitle>Minhas Anotações</ScreenTitle>
                <FilterView>
                    <TextFilter placeholder="Filtro" onChangeText={setSearch}/>
                </FilterView>
            </Header>

            {isLoadding &&
            <ActivityIndicator size="large" color="#7D91FA" />
            }

            {userNotes.length != 0 ?
            
            <ScrollView showsVerticalScrollIndicator={false}>

                {
                    userNotes.filter((note) => {
                        if(search === ""){
                            return note
                        } else if(note.content.toLowerCase().includes(search.toLowerCase())){
                            return note
                        }
                    }).map((note) => {
                        let date = new Date(note.createdAt);
                        dateFormated = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
                        return <Note key={note.id} createdAt={dateFormated} content={note.content} title={note.title} onPress={() => handleViewNote(note, dateFormated)}/>
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