
import Input from './Input';
import React,{useState} from 'react';
import Square from './Square'
function App() {
  const [color,setColor]=useState("blue");
  return (
    <div className="App">
      <header className="App-header">
      <Square color={color}/>
     <Input color={color} setColor={setColor}/>

      </header>
    </div>
  );
}

export default App;
