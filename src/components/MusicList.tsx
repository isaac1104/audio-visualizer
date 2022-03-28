import { useEffect } from 'react';
import { Music } from 'tabler-icons-react';
import { List, ThemeIcon } from '@mantine/core';

import useStore from 'src/store';
import Visualizer from 'src/components/Visualizer';

const MusicList = () => {
  const [songs, setSelectedSong] = useStore(state => [
    state.songsSlice.data,
    state.songsSlice.setSelectedSong,
  ]);
  const selectedSong = useStore(state => state.selectedSongSlice.data);
  const firstSong = useStore(state => state.songsSlice.data[0]);

  useEffect(() => {
    const { id, audioPath, albumPath, title } = firstSong;
    setSelectedSong({ id, audioPath, albumPath, title });
  }, [firstSong.id, firstSong.title]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <List
        spacing='md'
        icon={
          <ThemeIcon color='teal' size={24} radius='xl'>
            <Music size={16} />
          </ThemeIcon>
        }
      >
        {songs.map(({ id, audioPath, albumPath, title }) => (
          <List.Item
            key={id}
            onClick={() => setSelectedSong({ id, audioPath, albumPath, title })}
            icon={
              id === selectedSong.id && (
                <ThemeIcon color='blue' size={24} radius='xl'>
                  <Music size={16} />
                </ThemeIcon>
              )
            }
          >
            {title}
          </List.Item>
        ))}
      </List>
      <Visualizer />
    </div>
  );
};

export default MusicList;
