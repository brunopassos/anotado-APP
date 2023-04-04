import { ScrollView } from "react-native";

import { Note } from "../../components/Note";

import { notas } from "../../DB";

import {
    Container,
    Header,
    LogoutButton,
    ScreenTitle,
    NotesNumber,
    FilterView,
    TextFilter,
} from "./styles";

import LogoutSvg from "../../../assets/logout.svg";


export function Dashboard(){
    return(
        <Container>
            <Header>
                <LogoutButton>
                    <LogoutSvg width={40} height={40}/>
                </LogoutButton>
                <ScreenTitle>Minhas Anotações</ScreenTitle>
                <NotesNumber>{notas.length} notas</NotesNumber>
                <FilterView>
                    <TextFilter/>
                </FilterView>
            </Header>

            <ScrollView showsVerticalScrollIndicator={false}>
                {notas.map((note) => (
                    <Note key={note.id} createdAt={note.createdAt} content={note.content} title={note.title} onPress={() => handleViewNote(note)}/>
                ))}
            </ScrollView>
        </Container>
    )
}