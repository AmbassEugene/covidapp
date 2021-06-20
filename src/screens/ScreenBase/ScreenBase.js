import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';

const Wrap = styled.View`
  flex: 1;
  background-color: ${AppTheme.PRIMARY};
`;

const ScreenBase = ({children}) => {
  return <Wrap>{children}</Wrap>;
};

export {ScreenBase};
