import Input from './Components/Input'
import Button from './Components/Button'

import { Container,Content, Row, ContentKeyboard } from "./styles";
import { useState } from 'react';


const App = () => {
  const  [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')


  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')  
    setOperation('')  
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSubtraction = () => {
    if (firstNumber === '0') {
      setFirstNumber (String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSumNumbers = () => {
    
    if (firstNumber === '0') {
      setFirstNumber (String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
      handleAddNumber('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplication = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const multiplication = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiplication))
      setOperation('')
    }
  }

  const handleDivision = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handlePercentage = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    }else{
      const percentage = (Number(firstNumber) * Number(currentNumber))/100
      setCurrentNumber(String(percentage))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers()
          break;
          case '-':
            handleSubtraction()
            break;
          case '*':
            handleMultiplication()
            break;
          case '/':
            handleDivision()
            break;
          case '%':
            handlePercentage()
            break;

        default:
          break;
      }
    } 
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <ContentKeyboard>
          <Row>
            <Button label="AC" onClick={handleOnClear}/>
            <Button label="/" onClick={handleDivision}/>
            <Button label="%" onClick={handlePercentage}/>
            {/*TODO FAZER A FUNCTION PARA POTENCIAÇÃO*/}
            <Button label="^"/>
          </Row>

          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplication}/>
          </Row>

          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleSubtraction}/>
          </Row>

          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>

          <Row>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        
        </ContentKeyboard>
      </Content>
    </Container>
  );
}

export default App;
