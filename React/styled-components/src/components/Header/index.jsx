import React from 'react'
import logo from '../../assets/logo-dio.png'
import Button from '../Button';
import { 
    Container, 
    BuscarInputContainer,
    Column,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper 
} from './styles';
import { useNavigate } from 'react-router-dom'


const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/cadastro')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleHome = () => {
        navigate('/')
    }



  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                ) : (
                    <>
                        <MenuRight onClick={handleHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleLogin}/>
                        <Button title="Cadastrar" onClick={handleCadastro}/>
                    </>
                )}
                
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Header;
