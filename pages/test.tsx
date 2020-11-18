import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Button } from '@components/ui';

const Root = styled.div``;

export default function Test() {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  const handleNext = React.useCallback(() => {
    setIndex((index + 1) % 4);
  }, [index, setIndex]);

  return (
    <Root className="fixed inset-0 h-full flex flex-col">
      <div className="absolute inset-0 h-full">
        <ReactPlayer
          playing={playing}
          url={`/videos/${index + 1}.mp4`}
          onEnded={() => handleNext()}
          playsinline
          width="100%"
          height="100%"
        />
        <div className="hidden">
          <ReactPlayer
            playing={false}
            muted
            url={`/videos/${((index + 1) % 4) + 1}.mp4`}
          />
        </div>
      </div>
      <div className="flex-grow" />
      <div className="flex justify-around z-10 text-white">
        <div>index: {index + 1}</div>
        <div>
          <Button onClick={() => setPlaying(!playing)}>
            {playing ? 'pause' : 'play'}
          </Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </div>
      </div>
    </Root>
  );
}
