// @ts-ignore
import AudioSpectrum from 'react-audio-spectrum';

const Visualizer = () => {
  return (
    <AudioSpectrum
      id='audio-canvas'
      height={200}
      width={500}
      audioId='audio-element'
      capColor='red'
      capHeight={2}
      meterWidth={2}
      meterCount={512}
      meterColor={[
        { stop: 0, color: '#f00' },
        { stop: 0.5, color: '#0CD7FD' },
        { stop: 1, color: 'red' },
      ]}
      gap={4}
    />
  );
};

export default Visualizer;
