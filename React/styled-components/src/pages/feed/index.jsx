import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

import { 
    Container,
    Column,
    Title,
    TitleHighLight
} from "./styles";
import bannerImage from '../../assets/banner.png'



const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>

            <Column flex={1}>
                <TitleHighLight>#HANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                <UserInfo percentual={21} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                <UserInfo percentual={10} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                <UserInfo percentual={37} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                <UserInfo percentual={90} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
                <UserInfo percentual={80} nome='John Alencar' image='https://avatars.githubusercontent.com/u/89667722?v=4'/>
            </Column>
        </Container>
    </>)
}

export { Feed }