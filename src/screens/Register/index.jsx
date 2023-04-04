import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { ErrorText } from "../../components/ErrorText";
import { Button } from "../../components/Button";

import Logo from "../../../assets/note.svg";
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    BackButton,
    Header,
    AppName,
    Form,
    InputText,
} from "./styles";

export function Register(){
    
    const schema = yup.object({
        email: yup
          .string()
          .email("Email inválido")
          .required("O email não pode ser vazio."),
        password: yup
          .string()
          .min(6, "A senha deve ter pelo menos 6 digitos.")
          .required("A senha não pode ser vazia."),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password")], "Senhas não são iguais")
          .required("Confirme a senha"),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data){
        console.log(data);
        // setIsLoadding(true)
        // Api.post("/user", data)
        // .then((_) => reset())
        // .then((_) => setIsLoadding(false))
        // .then((_) => navigation.navigate("Login"))
        // .catch(error => console.log(error));
    }

    const handleReturnHomeScreen = () => {
        console.log("retornar");
        // navigation.navigate("Home");
    }

    return(
        <Container>
            <BackButton activeOpacity={.7} onPress={handleReturnHomeScreen}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </BackButton>
            <Header>
                <Logo width={100} height={100}/>
                <AppName>Registro</AppName>
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
                        placeholder={"Senha - Min 6 dígitos"}
                        secureTextEntry={true}
                        />
                    )}
                />
                
                {errors.confirmPassword && <ErrorText error={errors.confirmPassword.message}/>}
                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, value } }) => (
                        <InputText
                        onChangeText={onChange}
                        value={value}
                        placeholder={"Confirme a senha"}
                        secureTextEntry={true}
                        />
                    )}
                />
                <Button activeOpacity={.7} color="default" size="register_login" onPress={handleSubmit(onSubmit)}>Cadastrar</Button>
            </Form>
        </Container>
    )
}