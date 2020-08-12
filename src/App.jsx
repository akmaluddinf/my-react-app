import React from 'react'
import './App.css'
import Button from './Button'
import RedText from './RedText'
import InputComponent from './inputComponent'

function App() {
  return (
    <div className="App">
      <Button 
      text="akmal"
      >
        <RedText>
          akmaluddin
        </RedText>
      </Button>
      <InputComponent />
    </div>
  );
}

export default App;
