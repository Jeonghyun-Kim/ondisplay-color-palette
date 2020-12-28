import styled from 'styled-components';
import { Text as TextTemp } from '@components/ui';

export const Root = styled.div`
  min-width: 100px;
  padding: 0.25rem;
`;

export const Text = styled(TextTemp)``;

export const Box = styled.div`
  padding-top: 100%;
  border: 1px solid var(--accents-4);
  position: relative;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bg-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
