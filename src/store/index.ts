import create, { SetState, GetState } from 'zustand';

import { createSelectedSongSlice } from 'src/store/selectedSong';
import { createSongsSlice } from 'src/store/songs';
import { StoreState } from 'src/store/types';

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createSelectedSongSlice(set, get),
  ...createSongsSlice(set, get),
});

const useStore = create<StoreState>(createRootSlice);

export default useStore;
