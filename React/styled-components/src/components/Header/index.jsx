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


const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Header;
