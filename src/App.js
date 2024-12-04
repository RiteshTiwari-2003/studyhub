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

  },[]);
  // 3. 3rd variation -> on first render + and whenever dependency changes
  useEffect(()=>{
    console.log("change observed");
  },[text]);
  // 4. variation 4: handle unmounting of the component
  useEffect(()=>{
    console.log("event added");
    return ()=>{
      console.log("event removed");
    }
  },[text]);// in react when on any button addevent listener added then if any event occur on that button then listner listen and do processing and
  // again when any event occur then in rect first remove past listener and then add this listner 
  //and in variation 4 on first load and render event added printed on console but after this after every render when useEffect executed then first execute return's console then normal console.
  // second parameter in useeffect basically show the dependencies, this show that my useEffect run only one time for first time when app component render
  function changeHandler(event){// in 2nd variation means this useEffect run when app component fully render for the first time after that onlu one time useEffect execute
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
// useState return two value first is that state and second is that function that run when any change occur on state,
// and if you want to perform task using code after the component has rendered  then we use useEffect
// by the use of useEffect you handle state 