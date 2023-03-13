import { useEffect, useState } from 'preact/hooks';

import ccmPiano from '/music/ccm-piano.mp3';

type Music = {
  id: number;
  title: string;
  artist: string;
  src: string;
};

const music: Music = {
  id: 2,
  title: 'ccm-piano.mp3',
  artist: 'ccm-piano',
  src: ccmPiano,
  // https://www.youtube.com/watch?v=8vuikTgvJ8I
  // 1.십자가 00:01
  // 2.사랑하는 나의 아버지 04:56
  // 3.주만 바라볼찌라 10:58
  // 4.주 여호와는 광대하시도다 17:17
  // 5.십자가 그 사랑 22:35
  // 6.주를 찬양하며 29:16
  // 7.우리는 주의 백성이오니 35:07
  // 8.두려운 마음 가진자여 40:55
  // 9.주님은 내 호흡 46:57
  // 10.누군가 널 위해 기도하네 53:06
  // 11.시편 40편 57:42
};

function useAudio() {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.src = music.src;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return {
    isPlaying,
    audio,
    toggle: () => setIsPlaying((prev) => !prev),
  };
}

export default function Home() {
  const { isPlaying, toggle } = useAudio();

  return (
    <div className="container mx-auto my-8">
      <div className="my-8 flex items-center justify-center">
        <h2 className="text-lg font-medium">{music.title}</h2>
        <p className="mx-4 text-gray-500">{music.artist}</p>
        {isPlaying ? (
          <button onClick={toggle}>pause</button>
        ) : (
          <button onClick={toggle}>play</button>
        )}
      </div>
    </div>
  );
}
