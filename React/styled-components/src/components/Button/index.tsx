import React from "react";
import { ButtonContainer } from "./styles";
import { IButton } from './types'
const Button = ({title, variant = "primary", onClick}) => {
    return(
        <ButtonContainer variant={variant} title={title} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export default Button