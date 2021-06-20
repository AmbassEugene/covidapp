import React from 'react';
import {View, Text, useColorScheme, ScrollView} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';

const Wrap = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

const ScreenBase = ({children}) => {
  const colorScheme = useColorScheme();
  return (
    <Wrap backgroundColor={AppTheme[colorScheme].BACKGROUND}>{children}</Wrap>
  );
};

export {ScreenBase};
