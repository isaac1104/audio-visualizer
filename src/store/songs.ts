import { SetState, GetState } from 'zustand';
import { StoreState } from 'src/store/types';

export const createSongsSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => ({
  songsSlice: {
    data: [
      { id: 1, title: 'Rock' },
      { id: 2, title: 'Hip Hop' },
      { id: 3, title: 'R&B' },
      { id: 4, title: 'Pop' },
    ],
    setSelectedSong: (id: number, title: string) => {
      set(prev => ({
        selectedSongSlice: {
          data: {
            ...prev.selectedSongSlice.data,
            id,
            title,
          },
        },
      }));
    },
  },
});
