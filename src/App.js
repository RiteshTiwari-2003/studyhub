import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";

function App() {
  const [text,setText]=useState('');
  //1. approach-> every renderuseEffect(()=>{
    //console.log("ui rendering is done");

  //});// you write the useEffect hook in the component in that component when render happen of that component the code run inside the useEffect hook, in which component you use seEffect apart fro that component in any other component when any change happen it is handled by the useEffect hook
  //2. approach -> on only single render first render
  useEffect(()=>{
    console.log("ui rendering is doone");

  },[]);// second parameter in useeffect basically show the dependencies
  function changeHandler(event){
    console.log(text);
    setText(event.target.value);

  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
