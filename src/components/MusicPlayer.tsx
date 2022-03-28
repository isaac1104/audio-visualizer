import React from 'react';
import ReactPlayer from 'react-player';
import { Image, Title } from '@mantine/core';

import useStore from 'src/store';

const MusicPlayer = () => {
  const { audioPath, albumPath, title } = useStore(
    state => state.selectedSongSlice.data
  );

  return (
    <div>
      <Image
        radius='md'
        src={albumPath}
        fit='contain'
        caption={<Title order={1}>{title}</Title>}
      />
      <ReactPlayer controls url={audioPath} height={100} />
    </div>
  );
};

export default MusicPlayer;
