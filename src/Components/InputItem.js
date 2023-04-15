import React from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import { teal } from '@mui/material/colors';
import useLocalStorage from './CustomHooks/Localstorage';


const InputItem = ({items, setItems}) => {
  const addItems = (inputValue) => {
    setItems([...items, {
      text: inputValue.current.value,
      id: uuidv4()
    }])
  }
  const [items, setItems] = useLocalStorage('todos', []);

  const inputHook = useRef("");  //referenz zum textfeld, bzw. was dort eingegeben wird
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        onKeyDown = {(e) => {
          if (e.key === "Enter") {
            addItems(inputHook);
            e.preventDefault(); 
          }
        }}
        id="todoInput"
        label="Todo"
        variant="outlined"
        name="todoInput"
        sx={{
          width: "100%",
          boxShadow: 3,
          bgcolor: teal[700],
          '& label': {
            color: "#004d40"
          },
          border: 1,
          borderColor: teal[200],
          borderRadius: 1,
        }}
        inputProps={{
          style: {
            fontFamily: 'cursive',
            color: "white",
          }
        }}
        inputRef={inputHook} />
    <Button
      variant="outlined"
      sx={{
        width: '10%',
        bgcolor: teal[100],
        boxShadow: 1,
        border: 1,
        color: teal[900],
        borderColor: teal[200],
        marginTop: '5px'
      }}
      onClick={(e) => { addItems(inputHook); } } //Funktion addItems von oben
    >
        Add
      </Button>
    </div>
  )
}

export default InputItem;
