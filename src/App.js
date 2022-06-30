import React, { useState } from 'react';
import html2canvas from 'html2canvas'; 
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('fire');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');

      link.download = "meme.jpg";
      link.href = img;
      link.click();

  });
  }

  return (
    <div className="App">
      
      <div className="set-text">        
        <select onChange={onChangeImagen}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>

        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' />
        <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/>
        <button onClick={onClickExportar}>Exportar</button>
      </div>

      <div id="meme" className='meme'>
        <span className='linea1'>{linea1}</span>
        <span className='linea2'>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="meme"/>
      </div>
      
    </div>
  );
}

export default App;
