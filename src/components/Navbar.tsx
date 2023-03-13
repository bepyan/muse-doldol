import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto py-8">
      <h2 class="text-center font-bold">돌돌말이 김밥</h2>
      <div class="flex items-center justify-center gap-2">
        <button onClick={() => navigate('/')}>home</button>
        <button onClick={() => navigate('/test')}>test</button>
      </div>
    </div>
  );
}
