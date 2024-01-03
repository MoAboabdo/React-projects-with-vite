import { useState } from 'react';
import './index.css';
function Calculator() {
  const [inputValue, setInputValue] = useState('');

  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    let answers = eval(inputValue);
    setInputValue(answers);
  }

  function clear() {
    setInputValue('');
  }

  return (
    <form className="calculator" name="calc">
      <input type="text" className="value" value={inputValue} />
      <span className="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display('/')}>/</span>
      <span onClick={() => display('*')}>*</span>
      <span onClick={() => display('7')}>7</span>
      <span onClick={() => display('8')}>8</span>
      <span onClick={() => display('9')}>9</span>
      <span onClick={() => display('-')}>-</span>
      <span onClick={() => display('4')}>4</span>
      <span onClick={() => display('5')}>5</span>
      <span onClick={() => display('6')}>6</span>
      <span className="plus" onClick={() => display('+')}>
        +
      </span>
      <span onClick={() => display('1')}>1</span>
      <span onClick={() => display('2')}>2</span>
      <span onClick={() => display('3')}>3</span>
      <span onClick={() => display('0')}>0</span>
      <span onClick={() => display('00')}>00</span>
      <span onClick={() => display('.')}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
}

export default Calculator;
