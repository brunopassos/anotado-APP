import Logo from "../../../assets/note.svg";
import { Ionicons } from '@expo/vector-icons';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { Button } from "../../components/Button";
import { ErrorText } from "../../components/ErrorText";

import {
    Container,
    BackButton,
    Header,
    AppName,
    Form,
    InputText,
} from "./styles";

export function Login({navigation}){

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

        console.log(data);
        // setIsLoadding(true)
        // Api.post("/user/login", data)
        // .then(res => getUserTokenFromAsyncStorage(res.data))
        // .then(_ => handleLoginLogout())
        // .then(_ => setIsLoadding(false))
        // .catch(error => console.error(error))
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