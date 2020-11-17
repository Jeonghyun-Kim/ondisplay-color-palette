import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/core';
import { ColorBox } from '@components/product';
import { Color } from '@lib/color-to-hex';

const colorArray = [
  'primary',
  'primary-2',
  'secondary',
  'secondary-2',
  'text-base',
  'text-primary',
  'text-secondary',
  'accents-0',
  'accents-1',
  'accents-2',
  'accents-3',
  'accents-4',
  'accents-5',
  'accents-6',
  'accents-7',
  'accents-8',
  'accents-9',
  'selection',
  'cyan',
  'green',
  'red',
  'pink',
  'purple',
  'blue',
  'violet-light',
  'violet',
];

const Root = styled.div`
  .list-container {
    display: grid;
    grid-gap: 0.125rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 500px) {
    .list-container {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  }
`;

export default function Home() {
  return (
    <Root className="mx-auto max-w-screen-xl pt-10 pb-20">
      <div className="list-container">
        {colorArray.map((color) => (
          <ColorBox key={`color-box-${color}`} color={color as Color} />
        ))}
      </div>
    </Root>
  );
}

Home.Layout = Layout;
