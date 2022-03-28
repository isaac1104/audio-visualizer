import React, { useEffect } from 'react';
import { List } from '@mantine/core';

import useStore from 'src/store';

const MusicList = () => {
  const [songs, setSelectedSong] = useStore(state => [
    state.songsSlice.data,
    state.songsSlice.setSelectedSong,
  ]);
  const firstSong = useStore(state => state.songsSlice.data[0]);

  useEffect(() => {
    const { id, audioPath, albumPath, title } = firstSong;
    setSelectedSong({ id, audioPath, albumPath, title });
  }, [firstSong.id, firstSong.title]);

  return (
    <List>
      {songs.map(({ id, audioPath, albumPath, title }) => (
        <List.Item key={id} onClick={() => setSelectedSong({ id, audioPath, albumPath, title })}>
          {title}
        </List.Item>
      ))}
    </List>
  );
};

export default MusicList;
