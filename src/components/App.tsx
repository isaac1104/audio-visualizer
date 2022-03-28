import React from 'react';
import { Container, SimpleGrid } from '@mantine/core';

import MusicList from 'src/components/MusicList';
import MusicPlayer from 'src/components/MusicPlayer';

const App = () => {
  return (
    <Container size='xl'>
      <SimpleGrid cols={2}>
        <MusicPlayer />
        <MusicList />
      </SimpleGrid>
    </Container>
  );
};

export default App;
