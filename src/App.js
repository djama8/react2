
import { useState } from 'react';
import './App.css';
import Calculator from './components/calculator/calculator';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  let links = ['Главная','Мои работы','Отзывы'];

  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter +1);
  }
  const minus = () => {
    setCounter(counter -1);
  }


  return (
    <div className="App">
     
      <Header  links={links}  bgcolor="#fff"/>
      <Main  img="https://s0.bloknot-krasnodar.ru/thumb/850x0xcut/upload/iblock/012/13c9210826f1_99bbac589a85f89f4258d169306993e8_887.jpg" text="Агаева Джамала" button="Подписаться"/>
      <h1>{counter}</h1>
      <button onClick={() => plus()}>+</button>
      <button onClick={() => minus()}>-</button>

      <Calculator />
    </div>
  );
}

export default App;
