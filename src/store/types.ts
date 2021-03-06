import { SetState, GetState } from 'zustand';

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

export interface SongState {
  id: number;
  audioPath: string;
  albumPath: string;
  title: string;
}

export interface SelectedSongState {
  selectedSongSlice: {
    data: SongState;
  };
}

export interface SongsState {
  songsSlice: {
    data: SongState[];
    setSelectedSong: ({
      id,
      audioPath,
      albumPath,
      title,
    }: {
      id: number;
      audioPath: string;
      albumPath: string;
      title: string;
    }) => void;
  };
}

export type StoreState = SelectedSongState & SongsState;
