import style from  './ResultsTable.module.css';
import React from 'react';

function ResultsTable({ props: { text } }) {

  const getTotalVerses = () => {
    return text.split('\n').filter((verso) => verso !== '').length;
  }

  const getTotalCharacters = () => {
    return text.length;
  }

  return (
    <div className={style.ResultsTable}>
      <table>
        <tr>
          <th>Total versos</th>
          <td>{getTotalVerses(text)}</td>
        </tr>
        <tr>
          <th>Total caracteres</th>
          <td>{getTotalCharacters(text)}</td>
        </tr>
      </table>
    </div>
  );
}

export default ResultsTable;
