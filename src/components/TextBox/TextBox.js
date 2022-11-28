import style from  './TextBox.module.css';
import React from 'react';

function TextBox({ props: { text, setText } }) {
  const handlerOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={style.TextBox}>
      <textarea onChange={handlerOnChange} value={text} placeholder="Ingresa un poema"/>
    </div>
  );
}

export default TextBox;
