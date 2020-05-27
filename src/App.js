import React from 'react'
import TextInput from './Components/TextInput.js'
import './App.css'


function App() {

  
  return (
    <div className="App">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <header className="App-header">
        <p>
          Atendimento de Vistorial Digital
        </p>
        <div className="Text-wraper">
          <TextInput 
            id="segurado" 
            label="Segurado" 
            placeholder="Nome e sobrenome do segurado" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>
        <div className="Text-wraper">
          <TextInput 
            id="nome-contato" 
            label="Nome do contato" 
            placeholder="Nome de quem receberá o SMS" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>
        <div className="Text-wraper">
          <TextInput 
            id="placa" 
            label="Placa" 
            placeholder="Placa do veículo" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>
        <div className="Text-wraper">
          <TextInput 
            id="sinistro" 
            label="Sinistro" 
            placeholder="Número do sinistro" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>

        <div className="Text-wraper">
          <TextInput 
            id="celular" 
            label="Número do celular" 
            placeholder="Número do celular" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>
        <div className="Text-wraper">
          <TextInput 
            id="confirmar-celular" 
            label="Confirmar número do celular" 
            placeholder="Confirme o número do celular" 
            variant="outlined" 
            fullWidth="true" 
          />
        </div>
      </header>
    </div>
  )
}

export default App;
