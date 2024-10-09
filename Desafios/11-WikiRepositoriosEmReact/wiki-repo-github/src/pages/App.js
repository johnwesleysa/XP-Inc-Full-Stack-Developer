import gitlogo from '../assets/github.png'
import { Container } from './styles.js';
import Input from '../components/Input/index.js';
import ItemRepo from '../components/ItemRepo/index.js';
import Button from '../components/Button/index.js';
import { useState } from 'react';
import { api } from '../services/api.js';

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
  
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        } else {
          alert('Repositório já existe');
        }
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      alert('Erro ao buscar o repositório');
    }
  };
  
  const handleRemoveRepo = (id) => {
    const remove = repos.filter((repo => repo.id !== id))
    setRepos(remove)
  } 

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='Github Logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => 
        <ItemRepo repo = {repo} handleRemoveRepo={handleRemoveRepo}/>
      )}
      
    </Container>
    
  );
}

export default App;
