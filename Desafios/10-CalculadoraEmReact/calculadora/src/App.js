import Input from './Components/Input'
import Button from './Components/Button'

import { Container, Content, Row, ContentKeyboard } from "./styles";
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const [expression, setExpression] = useState('') // Novo estado para a expressão

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')  
    setOperation('')
    setExpression('') // Limpar a expressão também
  }

  const handleAddNumber = (number) => {
    if (currentNumber === '0') {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(prev => `${prev}${number}`);
    }
    setExpression(prev => `${prev}${number}`); // Atualiza a expressão
  }

  const handleSubtraction = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }
    setExpression(prev => `${prev}-`); // Atualiza a expressão com o operador
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }
    setExpression(prev => `${prev}+`); // Atualiza a expressão com o operador
  }

  const handleMultiplication = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }
    setExpression(prev => `${prev}*`); // Atualiza a expressão com o operador
  }

  const handleDivision = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }
    setExpression(prev => `${prev}/`); // Atualiza a expressão com o operador
  }

  const handlePercentage = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    }
    setExpression(prev => `${prev}%`); // Atualiza a expressão com o operador
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        case '%':
          result = (Number(firstNumber) * Number(currentNumber)) / 100;
          break;
        default:
          return;
      }
      setCurrentNumber(String(result));
      setExpression(`${expression}=${result}`); // Mostra o resultado na expressão
      setFirstNumber('0');
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={expression || currentNumber}/> {/* Mostra a expressão completa */}
        <ContentKeyboard>
          <Row>
            <Button label="AC" onClick={handleOnClear}/>
            <Button label="/" onClick={handleDivision}/>
            <Button label="%" onClick={handlePercentage}/>
            {/*TODO FAZER A POTENCIAÇÃO*/}
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
            <Button label="=" onClick={handleEquals}/>
          </Row>

        </ContentKeyboard>
      </Content>
    </Container>
  );
}

export default App;
