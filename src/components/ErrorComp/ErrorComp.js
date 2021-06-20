import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {AppTheme} from '../../config/theme';
import {AppText, Space, SpaceBetween} from '../styles';
import styled from 'styled-components';

const Wrap = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const RetryBtn = styled.TouchableOpacity`
  background-color: ${props => props.bgc};
  /* width: 50%; */
  /* align-self: center; */
  padding: 15px 40px;
  border-radius: 15px;
`;

const ErrorComponent = props => {
  const colorScheme = useColorScheme();

  return (
    <Wrap>
      <AppText bold center color={AppTheme[colorScheme].TEXT} semiLarge>
        Some failure occurred!
      </AppText>

      <Space size="30px" />

      <RetryBtn bgc={AppTheme.PRIMARY}>
        <AppText center color={AppTheme.WHITE} semiLarge>
          Try it again
        </AppText>
      </RetryBtn>
    </Wrap>
  );
};

export {ErrorComponent};
