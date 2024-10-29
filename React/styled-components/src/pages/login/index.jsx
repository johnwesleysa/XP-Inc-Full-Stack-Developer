import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { 
    Container,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper 
} from "./styles";
import { MdEmail, MdPassword } from "react-icons/md";

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState:{ errors, isValid } } = useForm()
    const onSubmit = data => console.log(data)

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the cange._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input  name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdPassword/>}/>
                        <Button title="Entrar" variant="secondary" type="submited"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
    
        </Container>
    </>)
}

export { Login }