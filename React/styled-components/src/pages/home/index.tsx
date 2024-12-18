import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import bannerImage from '../../assets/banner.png'
import Button from "../../components/Button";
import Header from "../../components/Header";

import { 
    Container,
    TextContent,Title,
    TitleHighLight 
} from "./styles";


const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente
                    <br/>
                    </TitleHighLight>
                    O seu futuro Global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoraas do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={(handleClickSignIn)}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }