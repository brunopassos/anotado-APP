import { Dimensions } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons} from "@expo/vector-icons";

import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    BackButton,
    Header,
    ScreenTitle,
    FormView,
    Input,
    Date
} from "./styles";


export function AddNote(){

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors} } = useForm({});

    const windowHeigth = Dimensions.get("window").height / 2.2;

    const handleAddNote = (data) => {
        console.log(data);
        // setIsLoadding(true);
        // Api.post("/note", data, {
        //     headers: {
        //         "Authorization" : `Bearer ${userToken}`
        //     }
        // })
        // .then((_) => setIsLoadding(false))
        // .then(_ => getUserNotes())
        // .then((_) => navigation.navigate("Dashboard"))
        // .catch(err => console.error(err));
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
                <ScreenTitle>Nota Anotação</ScreenTitle>
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
                <Date>20 de Janeiro - 17:03</Date>
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