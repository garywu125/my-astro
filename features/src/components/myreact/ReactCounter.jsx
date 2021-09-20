import { useState } from 'react';
// js_utility share code to different frontend js component
import { sayHello,sayHi } from '../../js_utility/greeting';

/** a counter written in React   */
export function Counter({ children }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);
  const worldGreeting=()=>sayHello('world');
  const twGreeting=()=>sayHi('你好');

  return (
    <>
      <div className="counter bg-blue-400" >
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
        <button onClick={worldGreeting}>say hello</button>
        <button onClick={twGreeting}>sayhi</button>
      </div>
      <div className="children bg-blue-400">{children}</div>
    </>
  );
}