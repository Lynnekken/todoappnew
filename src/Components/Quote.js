import React from 'react'
import { useState } from 'react';


const Quote = () => {
    const [quote, setQuote] = useState('');
   
    const handleClick = () => {
        fetch('https://v2.jokeapi.dev/', {
            method: 'GET'
           
          })
          .then(response => response.json())
      .then(data => {
        const { quote } = data[0];
        setQuote(quote);
      })
      .catch(error => {
        console.error(error);
      });
  };

return (
    <div className="quote" id="quoteBox">
      <div><p>{quote}</p></div>  
    <button id="buttonQuote" onClick={handleClick}>Get some inspiration</button>
    </div>
)} 


export default Quote