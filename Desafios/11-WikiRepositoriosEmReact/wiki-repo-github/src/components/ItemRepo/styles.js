import { styled } from 'styled-components'

export const ItemContainer = styled.div `

    width: 80%;
    display:flex;
    flex-direction: column;
    
    h3 {
        font-size: 32px;
        color: #FAFAFA;

    }

    p {
        font-size: 12px;
        color: #FAFAFA60
    }

    a.remover {
        color: #FF0000;
        padding-top: 10px;
        text-decoration: none;
    }

    
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`