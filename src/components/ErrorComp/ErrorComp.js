import React from 'react';
import {useColorScheme} from 'react-native';
import {AppTheme} from '../../config/theme';
import {AppText, Space} from '../styles';
import styled from 'styled-components';

const Wrap = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const RetryBtn = styled.TouchableOpacity`
  background-color: ${props => props.bgc};
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

      <RetryBtn bgc={AppTheme.PRIMARY} onPress={props.action}>
        <AppText center color={AppTheme.WHITE} semiLarge>
          Try it again
        </AppText>
      </RetryBtn>
    </Wrap>
  );
};

export {ErrorComponent};
