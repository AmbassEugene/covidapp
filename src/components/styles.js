import styled from 'styled-components';
import {AppTheme} from '../config/theme';

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

export const AppText = styled.Text`
  font-family: ${props =>
    props.semiBold
      ? 'Mulish-SemiBold'
      : props.bold
      ? 'Mulish-Bold'
      : 'Mulish-Regular'};
  font-size: ${props =>
    props.small
      ? '12px'
      : props.large
      ? '24px'
      : props.semiLarge
      ? '18px'
      : props.fontSize
      ? props.fontSize
      : '14px'};
  color: ${props => (props.color ? props.color : AppTheme.BLACK)};

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  text-align: ${props =>
    props.center ? 'center' : props.right ? 'right' : 'left'};

  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`;

export const Space = styled.View`
  margin: ${props => (props.size ? props.size : '10px')};
`;
