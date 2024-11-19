import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
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
    Wrapper,
    ErrorText
} from "./styles";
import { MdEmail, MdPassword } from "react-icons/md";
import { api } from "../../components/services/api";


const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  })
  .required()


const Login = () => {

    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/cadastro')
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
                        <Input name="email" control={control}  errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input  name="password" control={control} errorMessage={errors?.password?.message}   placeholder="Senha" type="password" leftIcon={<MdPassword/>}/>
                        <Button title="Entrar" variant="secondary" type="submited"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={handleCadastro}>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
    
        </Container>
    </>)
}

export { Login }