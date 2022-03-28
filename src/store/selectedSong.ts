import { SetState, GetState } from 'zustand';
import { StoreState } from 'src/store/types';

export const createSelectedSongSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => ({
  selectedSongSlice: {
    data: {
      id: 0,
      audioPath: '',
      albumPath: '',
      title: '',
    },
  },
});
