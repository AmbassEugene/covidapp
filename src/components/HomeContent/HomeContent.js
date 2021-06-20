import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';
import {AppText, Space, SpaceBetween} from '../styles';

const Wrapper = styled.View`
  /* align-items: center; */
  margin-top: 10px;
  padding: 15px 30px;
`;

const HomeContent = props => {
  const colorScheme = useColorScheme();

  return (
    <Wrapper>
      <AppText center color={AppTheme[colorScheme].TEXT}>
        I am HomeContent
      </AppText>
      <Space size="15px" />

      <SpaceBetween>
        <AppText color={AppTheme[colorScheme].TEXT} semiLarge>
          Confirmed
        </AppText>
        <AppText color={AppTheme[colorScheme].TEXT} semiLarge>
          1,22,345
        </AppText>
      </SpaceBetween>
    </Wrapper>
  );
};

export {HomeContent};
