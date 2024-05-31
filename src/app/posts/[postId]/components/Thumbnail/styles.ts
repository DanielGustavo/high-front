import styled from 'styled-components';

import { TContainer } from '@/app/types/posts/Post/Thumbnail/TStyles';

export const Container = styled.div<TContainer>`
  position: relative;
  height: ${({ height }) => `${height ?? 200}px`};
  max-height: 350px;

  width: 100%;
  display: flex;
  justify-content: center;
`;
