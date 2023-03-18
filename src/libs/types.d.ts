export type Music = {
  title: string;
  time: string;
  refUrl?: string;
};

export type Playlist = {
  id: number;
  title: string;
  artist: string;
  src: string;
  refUrl?: string;
  musicList: Music[];
};
