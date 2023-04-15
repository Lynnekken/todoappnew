import React from 'react'
import { useState, useEffect } from 'react'


function useLocalStorage() {
  const [items, setItems] = useState(""); //currentstate - set: zpdates the state, state kreiert, initalisiert
  

  useEffect(() => {
    localStorage.setItems('items', JSON.stringify(items)); //fügt den wert dem local storage hinzu
  }, [items]); //re-render, wenn der wert sich ändert

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));  //holt alle werte, die beim erste rendering, dh. bei rerendering hat es alle werte from local storage
    if (items) {
     setItems(items);
    }
  }, []);


  return (
    <div>use</div>
  )
}

export default useLocalStorage