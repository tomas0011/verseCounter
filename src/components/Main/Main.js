import style from  './Main.module.css';
import React, { useState } from 'react';

function Main() {
  const [b, setB] = useState(0);

  return (
    <div className={style.Main}>
      <h1>Hola</h1>
    </div>
  );
}

export default Main;
