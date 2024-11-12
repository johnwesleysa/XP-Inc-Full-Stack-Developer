import { 
    Container,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    ErrorText,
    TenhoConta,
    FazerLogin,
    Article
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { MdEmail, MdPassword, MdPerson } from "react-icons/md";
import { api } from "../../components/services/api";

const schema = yup
  .object({
    nome_completo: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  })
  .required()


const Cadastro = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1){
                (navigate('/feed'))
            } else {
                alert("E-mail ou senha invalido")
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    }

    return(
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change_</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nome_completo" control={control}  errorMessage={errors?.nome_completo?.message} placeholder="Nome Completo" leftIcon={<MdPerson />}/>
                            <Input name="email" control={control}  errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input  name="password" control={control} errorMessage={errors?.password?.message}   placeholder="Senha" type="password" leftIcon={<MdPassword/>}/>
                            <Button title="Criar minha conta" variant="secondary" type="submited"/>
                        </form>
                        <Article>Ao Clicar em criar "minha conta grátis", declaro que aceito as Políticas de Privacidade e os termos de Uso da DIO</Article>
                        <Row>
                            <TenhoConta onClick={handleLogin}>Já tenho conta.</TenhoConta>
                            <FazerLogin onClick={handleLogin}>Fazer Login</FazerLogin>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro }