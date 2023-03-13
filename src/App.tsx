import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

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

function Slug() {
  const { slug } = useParams();
  return <div>{slug}</div>;
}
