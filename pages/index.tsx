import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/core';
import { ColorBox } from '@components/product';

import colors from '../public/color-palette.json';
import { useTheme } from 'next-themes';

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
  const { theme } = useTheme();

  return (
    <Root className="mx-auto max-w-screen-xl pt-10 pb-20">
      <div className="list-container">
        {theme &&
          Object.keys(colors.light).map((color) => (
            <ColorBox
              key={`color-box-${color}`}
              label={color}
              // @ts-ignore
              color={colors[theme as 'light' | 'dark'][color]}
            />
          ))}
      </div>
    </Root>
  );
}

Home.Layout = Layout;
