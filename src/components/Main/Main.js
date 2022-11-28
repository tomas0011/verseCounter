import style from  './Main.module.css';
import React, { useState } from 'react';
import { TextBox, ResultsTable } from '../';

function Main() {
  const [text, setText] = useState('');

  return (
    <div className={style.Main}>
      <h1>Contador de versos</h1>
      <TextBox props={{ text, setText }}/>
      <ResultsTable props={{ text, setText }}/>
    </div>
  );
}

export default Main;
