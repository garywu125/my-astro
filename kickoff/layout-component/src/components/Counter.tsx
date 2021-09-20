import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const add = () =>{
     setCount((i) => i + 1); 
     getData()
  }   
  const subtract = () => setCount((i) => i - 1);

  // client fetch can be use in preact component
  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data) 
  }

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="children">{children}</div>
      
    </>
  );
}