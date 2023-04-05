import { useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Toast from 'react-native-toast-message';

import Logo from "../../../assets/note.svg";
import { Ionicons } from '@expo/vector-icons';

import { ActivityIndicator } from "react-native";

import { Button } from "../../components/Button";
import { ErrorText } from "../../components/ErrorText";

import { Api } from "../../services";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/auth";

import {
    Container,
    BackButton,
    Header,
    AppName,
    Form,
    InputText,
} from "./styles";

export function Login(){

    const showSuccessToast = () => {
        Toast.show({
          type: 'success',
          text1: '🥳',
          text2: 'Seja bem vindo(a).'
        });
    }

    const showErrorToast = () => {
        setIsLoadding(false);
        Toast.show({
          type: 'error',
          text1: '❌',
          text2: 'Usuário ou senha inválidos.'
        });
    }

    const { handleLogin } = useContext(AuthContext);

    const navigation = useNavigation();

    const [isLoadding, setIsLoadding] = useState(false);

    const schema = yup.object({
        email: yup
          .string()
          .email("Email inválido")
          .required("O email não pode ser vazio."),
        password: yup
          .string()
          .required("A senha não pode ser vazia.")
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data){
        setIsLoadding(true)
        Api.post("/user/login", data)
        // .then(res => getUserTokenFromAsyncStorage(res.data))
        .then(_ => handleLogin())
        .then(_ => setIsLoadding(false))
        .then(_ => showSuccessToast())
        .catch(error => showErrorToast())
    }

    const handleReturnHomeScreen = () => {
        navigation.navigate("Home");
    }

    return (
        <Container>
            <BackButton  activeOpacity={.7} onPress={handleReturnHomeScreen}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </BackButton>
            <Header>
                <Logo width={100} height={100}/>
                <AppName>Login</AppName>
            </Header>
            {isLoadding &&
            <ActivityIndicator size="large" color="#7D91FA" />
            }
            <Form>
                {errors.email && <ErrorText error={errors.email.message}/>}
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <InputText
                            onChangeText={onChange}
                            value={value}
                            placeholder={"Email"}
                        
                        />
                    )}
                />
                {errors.password && <ErrorText error={errors.password.message}/>}
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <InputText
                        onChangeText={onChange}
                        value={value}
                        placeholder={"Senha"}
                        secureTextEntry={true}
                        />
                    )}
                />
                <Button activeOpacity={.7} color="default" size="register_login" onPress={handleSubmit(onSubmit)}>Entrar</Button>
            </Form>
        </Container>
    )
}