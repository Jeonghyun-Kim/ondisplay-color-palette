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
`;
