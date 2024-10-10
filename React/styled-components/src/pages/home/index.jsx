import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { 
    Container,
    TextContent,Title,
    TitleHighLight 
} from "./styles";
import bannerImage from '../../assets/banner.png'
const Home = () => {
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
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }