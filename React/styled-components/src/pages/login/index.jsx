import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Header/styles";
import { 
    Container,
    TextContent,Title,
    TitleHighLight 
} from "./styles";

const Login = () => {
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
                    Domine as tecnologias utilizadas pelas empresas mais inovadoraas do mundo e encare seu asasdfasdf desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <Input placeholder="e-mail" />
            </div>
    
        </Container>
    </>)
}

export { Login }