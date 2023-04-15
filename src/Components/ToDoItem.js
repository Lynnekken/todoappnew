import React from 'react'
import { FcFullTrash } from 'react-icons/fc'




function ToDoItem({text, newClass, id, items, setItems}) {  //props, die übergeben werden,
  
  const handleDeleteItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);  //filters das array auf die id, die nicht merh vorhanden sind.
    console.log(updatedList);
    setItems(updatedList);

  };
  return (
    <li className={newClass} style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #00796b", padding: "5px", width: "100 %"}}>
      {text} 
      <FcFullTrash className='delete-icon' onClick={ (e) => {handleDeleteItem(id)}} /> 
    </li>
  )
}


export default ToDoItem