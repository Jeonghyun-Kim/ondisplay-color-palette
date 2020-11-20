import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import { Button } from '@components/ui';
import { isMobile } from '@lib/browser';

import 'keen-slider/keen-slider.min.css';

const Root = styled.div`
  .keen-slider {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .catching-video {
  }
`;

export default function Test() {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);
  const isInitial = React.useRef<boolean>(true);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slidesPerView: 1,
    centered: true,
    duration: 1000,
    slideChanged: (s) => {
      if (!isInitial.current) {
        setIndex(s.details().relativeSlide);
        setPlaying(true);
      }
    },
  });
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      if (playing) {
        ref.current.muted = false;
        ref.current.play();
      } else ref.current.pause();
    }
  }, [playing, ref.current]);

  const handleNext = React.useCallback(() => {
    setPlaying(false);
    slider.next();
  }, [slider]);

  return (
    <Root className="h-full flex flex-col">
      <div className="fixed inset-0 h-full">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src="/videos/posters/1.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/videos/posters/2.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/videos/posters/3.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/videos/posters/4.jpg" alt="" />
          </div>
        </div>
        <video
          ref={ref}
          className={cn(
            'catching-video absolute inset-0 h-full w-full object-cover z-10',
            {
              hidden: !playing,
            },
          )}
          poster={`/videos/posters/${index + 1}.jpg`}
          src={`/videos/${index + 1}.mp4`}
          playsInline
          muted
          autoPlay
          onEnded={() => handleNext()}
          onLoad={(e) => e.currentTarget.play()}
        />
      </div>
      <div className="flex-grow" />
      <div className="flex justify-around z-10 text-white">
        <div>index: {index + 1}</div>
        <div>
          <Button
            onClick={() => {
              if (isInitial.current) isInitial.current = false;
              setPlaying(!playing);
            }}
          >
            {playing ? 'pause' : 'play'}
          </Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </div>
      </div>
    </Root>
  );
}
