import React from 'react';

function handleOnClick() {
    alert('Hello, Astro!');
  }

const Button = ({ children }) => {
  return (
    <button onClick={handleOnClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{ children }</button>
  )
}

export default Button;