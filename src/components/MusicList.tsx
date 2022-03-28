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
    const { id, title } = firstSong;
    setSelectedSong(id, title);
  }, [firstSong.id, firstSong.title]);

  return (
    <List>
      {songs.map(({ id, title }) => (
        <List.Item key={id} onClick={() => setSelectedSong(id, title)}>
          {title}
        </List.Item>
      ))}
    </List>
  );
};

export default MusicList;
