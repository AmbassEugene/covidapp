import React from 'react';

import styled from 'styled-components';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTheme} from '../../config/theme';
import {AppText, Space, FlexView} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {formatString} from '../../util/formatters';

const Wrap = styled.View`
  height: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StateWrap = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  justify-content: space-between;
  align-items: center;
`;

const BannerBase = ({title, subTitle, children, ...props}) => {
  const navigation = useNavigation();

  const activeState =
    props.activeData.state === (undefined || 'Total')
      ? 'All States'
      : props.activeData.state;

  return (
    <Wrap backgroundColor={AppTheme.PRIMARY}>
      <AppText bold large color={AppTheme.WHITE}>
        {title}
      </AppText>
      <Space />
      <AppText semiLarge semiBold color={AppTheme.WHITE}>
        {subTitle}
      </AppText>

      <Space size="20px" />
      <FlexView style={{}}>
        <AppText semiLarge semiBold color={AppTheme.WHITE}>
          State
        </AppText>

        <Space large />

        <StateWrap onPress={() => navigation.navigate('State')}>
          <AppText semiLarge semiBold color={AppTheme.BLACK}>
            {formatString(activeState)}
          </AppText>
          <Space size="5px" />
          <Icon name="caretdown" size={20} color={AppTheme.BLACK} />
        </StateWrap>
      </FlexView>
    </Wrap>
  );
};

const mapStateToProps = state => {
  return {
    allData: state.home.allData || [],
    activeData: state.home.activeData || {},
  };
};

export const Banner = connect(mapStateToProps, null)(BannerBase);
