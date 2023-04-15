import React from 'react'
import ToDoItem from './ToDoItem'


function ToDoList({items, setItems}) { // items als Prop übergeben
  
  return (
    <div className='todo'>
      
      <ul className='todolist'>
      {items.map((item) => (  //map iteriert und erstellt eine neues todoitem für jedes element
        <ToDoItem key={item.id} text={item.text} newClass={"item"} id={item.id} items={items} setItems={setItems} /> // hier item.text anstatt item, hier werden die props festgelegtm, die an todoitem übergeben werden
      ))}
      </ul>
      
    </div>
  );
}

export default ToDoList;
