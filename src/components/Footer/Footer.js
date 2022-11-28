import style from  './Footer.module.css';
import React, { useState } from 'react';

function Footer() {
  return (
    <div className={style.Footer}>
      <h1>Hecho por tomas0011</h1>
      <p>
        Esto es una pagina con algunas herramientas utiles para el profesorado de literatura
      </p>
    </div>
  );
}

export default Footer;
