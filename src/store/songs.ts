import { SetState, GetState } from 'zustand';
import { StoreState } from 'src/store/types';

export const createSongsSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => ({
  songsSlice: {
    data: [
      {
        id: 1,
        title: 'Rock',
        audioPath: 'audios/rock.mp3',
        albumPath: 'images/rock.jpeg',
      },
      {
        id: 2,
        title: 'Jazz',
        audioPath: 'audios/jazz.mp3',
        albumPath: 'images/jazz.jpeg',
      },
      {
        id: 3,
        title: 'Dubstep',
        audioPath: 'audios/dubstep.mp3',
        albumPath: 'images/dubstep.jpeg',
      },
      {
        id: 4,
        title: 'Hip hop',
        audioPath: 'audios/hiphop.mp3',
        albumPath: 'images/hiphop.jpeg',
      },
    ],
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
    }) => {
      set(prev => ({
        selectedSongSlice: {
          data: {
            ...prev.selectedSongSlice.data,
            id,
            audioPath,
            albumPath,
            title,
          },
        },
      }));
    },
  },
});
