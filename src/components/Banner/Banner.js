import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';

const Wrap = styled.View`
  /* flex: 1; */
  height: 40%;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
  return (
    <Wrap>
      <Text>I am Banner</Text>
    </Wrap>
  );
};

export {Banner};
