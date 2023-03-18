import { useEffect, useMemo } from 'preact/hooks';

import { useMusicDol } from '~/libs/state';
import { Playlist } from '~/libs/types';
import { cn } from '~/libs/utils';

import ccmPiano from '/music/ccm-piano.mp3';

const localPlaylist: Playlist = {
  id: 2,
  title: 'piano.mp3',
  artist: 'piano',
  src: ccmPiano,
  refUrl: 'https://www.youtube.com/watch?v=8vuikTgvJ8I',
  musicList: [
    { title: '십자가', time: '00:01' },
    { title: '사랑하는 나의 아버지', time: '04:56' },
    { title: '주만 바라볼찌라', time: '10:58' },
    { title: '주 여호와는 광대하시도다', time: '17:17' },
    { title: '십자가 그 사랑', time: '22:35' },
    { title: '주를 찬양하며', time: '29:16' },
    { title: '우리는 주의 백성이오니', time: '35:07' },
    { title: '두려운 마음 가진자여', time: '40:55' },
    { title: '주님은 내 호흡', time: '46:57' },
    { title: '누군가 널 위해 기도하네', time: '53:06' },
    { title: '시편 40편', time: '57:42' },
  ],
};

export default function Home() {
  const audio = useMusicDol((s) => s.audio);
  const isPlaying = useMusicDol((s) => s.isPlaying);
  const currentTime = useMusicDol((s) => s.currentTime);
  const playlist = useMusicDol((s) => s.playlist);
  const toggleMusic = useMusicDol((s) => s.toggleMusic);
  const selectPlaylist = useMusicDol((s) => s.selectPlaylist);

  useEffect(() => {
    audio.loop = true;
    selectPlaylist(localPlaylist);
  }, []);

  const currentMusic = useMemo(
    () =>
      playlist?.musicList?.find((music) => {
        const [m, s] = music.time.split(':');
        const targetTime = Number(m) * 60 + Number(s);

        return targetTime <= currentTime;
      }),
    [currentTime, playlist],
  );

  return (
    <div class="container mx-auto my-8">
      <div class="my-8 flex items-center justify-center">
        <h2 class="text-lg font-medium">{playlist?.title}</h2>
        <p class="mx-4 text-gray-500">{playlist?.artist}</p>
        <button onClick={toggleMusic}>{isPlaying ? 'pause' : 'play'}</button>
        <div>{currentTime}</div>
      </div>
      <div class="flex flex-col items-center">
        {playlist?.musicList?.map((music) => (
          <div
            key={music.title}
            class={cn('w-80 p-4', music.title === currentMusic?.title && 'font-bold')}
          >
            <div>{music.title}</div>
            <div>{music.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
