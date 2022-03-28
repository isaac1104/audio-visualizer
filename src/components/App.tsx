import React from 'react';
import { Container, Grid } from '@mantine/core';

import MusicList from 'src/components/MusicList';
import useStore from 'src/store'

const App = () => {
  const selectedSong = useStore(state => state.selectedSongSlice.data)

  return (
    <Container size='xl'>
      <Grid columns={24}>
        <Grid.Col span={12}>
          {selectedSong.id} - {selectedSong.title}
        </Grid.Col>
        <Grid.Col span={12}>
          <MusicList />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default App;
