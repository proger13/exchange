import './App.css';
import React, { useState } from 'react';
import { XMLParser } from 'fast-xml-parser';
import { Button, TextField } from '@mui/material';



function App() {

  const [result, setResult] = useState([])
  const currencyList = result.map(e => {
    return <tr><td>{e.Name}</td><td>{e.Name}</td></tr>
  })

  function sortName() {
    const result2 = [...result]
    result2.sort((a, b) => a.Name.localCompare(b.Name))
    setResult(result2)
  }

  function push() {
    fetch('https://www.cbr-xml-daily.ru/daily_utf8.xml')
      .then(response => response.text())
      .then(parser => new XMLParser().parse(parser))
      .then(result => setResult(result.ValCurs.Valute))
  }

  function moneyConverter(valnum) {
    document.getElementById("outputrub").innerHTML=valnum*60
  }
  return (
    <div>
      <div className='wtndiv'>
        <button className='test' onClick={push}> UP </button>
        <Button className='test' onClick={sortName}> filter </Button>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td>index</td>
        </tr>
        {currencyList}
      </table>
      <div>
        <TextField> Search</TextField>
      </div>
    </div>
  )


}
export default App;


