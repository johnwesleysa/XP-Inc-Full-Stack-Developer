import { Header } from "../../components/Header";
import background from "../../assets/background.png"
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
        <div className="info">
          <div className="">
              <input name="usuario" placeholder="@username"/>
              <button>Buscar</button>
          </div>
          <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/89667722?v=4" className="profile" alt="Imagem de Perfil"/>
              <div>
                <h3>John Alencar</h3>
                <span>@johnwesleysa</span>
                <br/>
                <p>Prof. de TI experiente em otimização, suporte e automação com Python. Aprimorando Habilidades em ADS e engenharia e análise de dados</p>
              </div>
          </div>
          <hr/>
          <div>
            <h4>Repositórios</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
