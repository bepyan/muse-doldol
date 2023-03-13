import { useState } from 'preact/hooks';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>돌돌말이 김밥</h2>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}
