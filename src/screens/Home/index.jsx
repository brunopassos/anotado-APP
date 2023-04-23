import Logo from "../../../assets/note.svg";

import {
    Container,
    Header,
    AppName,
    LoginRegisterView,
    LoginView,
    LoginText,
    RegisterView,
    RegisterText
} from "./styles";


export function Home({navigation}){

    const handleGoToLoginScreen = () => {
        navigation.navigate("Login");
    }

    const handleGoToRegisterScreen = () => {
        navigation.navigate("Register");
    }

    return(
        <Container>
            <Header>
                <Logo width={100} height={100} />
                <AppName>ANOTADO</AppName>
            </Header>
            <LoginRegisterView>
                <LoginView  onPress={handleGoToLoginScreen} activeOpacity={.5}>
                    <LoginText>
                        Log-in
                    </LoginText>
                </LoginView>
                <RegisterView  onPress={handleGoToRegisterScreen} activeOpacity={.5}>
                    <RegisterText>
                        Register
                    </RegisterText>
                </RegisterView>
            </LoginRegisterView>
        </Container>
    )
}