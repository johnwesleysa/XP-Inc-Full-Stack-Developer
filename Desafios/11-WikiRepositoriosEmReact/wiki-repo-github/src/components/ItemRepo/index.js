import React from 'react'
import { ItemContainer } from './styles.js'


function ItemRepo({repo, handleRemoveRepo}) {
    const handleRemove = () => {    
    handleRemoveRepo(repo.id)
    }
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.fullname}</p>
        <br/>
        <a href={repo.html_url} target='blank'>Ver repositorio</a>
        <a href='#' className="remover">Remover</a>
        <hr/>
        
    </ItemContainer>
  )
}

export default ItemRepo
