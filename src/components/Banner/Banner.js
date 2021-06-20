import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';

const Wrap = styled.View`
  /* flex: 1; */
  height: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  elevation: 1;
`;

const Banner = () => {
  const colorScheme = useColorScheme();

  return (
    <Wrap backgroundColor={AppTheme.PRIMARY}>
      <Text>I am Banner</Text>
    </Wrap>
  );
};

export {Banner};
