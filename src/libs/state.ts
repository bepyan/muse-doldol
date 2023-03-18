/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';

import { Playlist } from './types';

export interface MusicDol {
  audio: HTMLAudioElement;
  playlist?: Playlist;
  isPlaying: boolean;
  currentTime: number;
  computed: {};
  toggleMusic: () => void;
  selectPlaylist: (playlist: Playlist) => void;
}

export const useMusicDol = create<MusicDol>((set, get) => ({
  audio: new Audio(),
  isPlaying: false,
  currentTime: 0,
  computed: {},
  selectPlaylist: (playlist) => {
    const { audio } = get();

    const updateTime = () => {
      set((s) => ({ ...s, currentTime: Math.floor(audio.currentTime) }));
    };
    audio.removeEventListener('timeupdate', updateTime);
    audio.src = playlist.src;
    audio.addEventListener('timeupdate', updateTime);

    set((s) => ({ ...s, playlist, isPlaying: false, currentTime: 0 }));
  },
  toggleMusic: () => {
    if (get().isPlaying) {
      get().audio.pause();
      set((s) => ({ ...s, isPlaying: false }));
    } else {
      get().audio.play();
      set((s) => ({ ...s, isPlaying: true }));
    }
  },
}));
