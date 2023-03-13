import { useState } from 'preact/hooks';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter basename="muse-doldol">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Slug />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <h2>돌돌말이 김밥</h2>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <div class="flex items-center gap-2">
        <button onClick={() => navigate('/')}>home</button>
        <button onClick={() => navigate('/test')}>test</button>
      </div>
    </div>
  );
}

function Home() {
  return <div>home</div>;
}

function Slug() {
  const { slug } = useParams();
  return <div>{slug}</div>;
}
