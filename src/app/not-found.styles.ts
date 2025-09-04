import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[6]};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.textMuted};
  max-width: 400px;
  text-align: center;
`;
