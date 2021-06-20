import styled from 'styled-components';

export const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpaceBetween = styled(FlexView)`
  justify-content: space-between;
  align-items: center;
`;

export const SpaceAround = styled(FlexView)`
  justify-content: space-around;
`;

export const SpaceEvenly = styled(FlexView)`
  justify-content: space-evenly;
`;
