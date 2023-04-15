import React from 'react' 
import './App.css'
import ToDoList from './Components/ToDoList'
import Heading from './Components/Heading'
import InputItem from './Components/InputItem'
import { useState } from 'react'
import Quote from './Components/Quote'
import useLocalStorage from './Components/CustomHooks/Localstorage'

//const itemsArray = ["Sport", "Coding"]


function App() {
  
  const [items, setItems] = useState([]); //im aary zuerst sport, coding drin, funktioniert auch ohne
  const [quote, setQuote] = useState('');
  return (
    <div className="App">
      <div className="glass">
    <div className="todoapp">
    <Heading title={"What to do today"} newClass={"header-one"}  />
    <ToDoList items={items} setItems={setItems} /> 
    <InputItem items={items} setItems={setItems}/>
    <Quote quote={setQuote}/>
    <useLocalStorage items={setItems}/>
    </div>
    </div>
    </div>  
    )
}

export default App
