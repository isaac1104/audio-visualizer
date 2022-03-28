import { Image } from '@mantine/core';

import useStore from 'src/store';

const MusicPlayer = () => {
  const { audioPath, albumPath, title } = useStore(
    state => state.selectedSongSlice.data
  );

  return (
    <div>
      <Image radius='md' src={albumPath} fit='contain' />
      <audio
        controls
        src={audioPath}
        id='audio-element'
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default MusicPlayer;
