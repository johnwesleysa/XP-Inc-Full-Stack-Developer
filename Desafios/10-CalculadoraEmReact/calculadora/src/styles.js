import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #E7E7E7;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    background-color: #22252D;
    width: 85%;
    min-height: 70vh;
    border-radius:15px;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ContentKeyboard = styled.div `
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #292D36;
    width: 100%;
    height: 500px;
    padding-top: 30px;
`