
import './App.css';
import React, { useState } from 'react';
import { XMLParser } from 'fast-xml-parser';


function App() {
  
  const [result, setResult] = useState([])
  const currencyList = result.map(e => {
    return <tr><td>{e.Name}</td><td>{e.Name}</td></tr>
  })

  function sortName() {
    const result2 = [...result]
    result2.sort((a, b) => a.Name.localCompare((b.Name))
    setResult(result2)
  }

  function push() {
    fetch('https://www.cbr-xml-daily.ru/daily_utf8.xml')
      .then(response => response.text())
      .then(parser => new XMLParser().parse(parser))
      .then(result => setResult(result.ValCurs.Valute))
  }
  return (
    <div>
      <button className='test' onClick={push}> UP </button>
      <button className='test' onClick={sortName}>  </button>
      <table>
        <tr>
          <td></td>
          <td></td>
        </tr>
        {currencyList}
      </table>
    </div>
  )


}
export default App;


