import React from "react";
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
    HasInfo
} from './styles.js'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://images.pexels.com/photos/28637777/pexels-photo-28637777/free-photo-of-silhueta-no-lago-powell-com-vista-para-o-deserto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/89667722?v=4"/>
                    <div>
                        <h4>John Alencar</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para Curso de HTML e CSS</h4>
                    <p>Projeto feito com o bootcamp da XP... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS # JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card