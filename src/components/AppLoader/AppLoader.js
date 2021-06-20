import React from 'react';
import {ActivityIndicator, useColorScheme} from 'react-native';
import {AppTheme} from '../../config/theme';
import {AppText, Space} from '../styles';
import styled from 'styled-components';

const Wrap = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const AppLoader = () => {
  const colorScheme = useColorScheme();

  return (
    <Wrap>
      <ActivityIndicator color={AppTheme[colorScheme].TEXT} size="large" />
      <Space />
      <AppText center color={AppTheme[colorScheme].TEXT} semiLarge>
        Getting data...
      </AppText>
    </Wrap>
  );
};

export {AppLoader};
