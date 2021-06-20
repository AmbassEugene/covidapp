import React, {useState} from 'react';
import {useColorScheme, Modal} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {AppTheme} from '../../config/theme';
import {AppText, Space} from '../styles';

const Wrap = styled.View`
  height: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const BannerBase = ({title, subTitle, children, ...props}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const colorScheme = useColorScheme();

  // const

  return (
    <Wrap backgroundColor={AppTheme.PRIMARY}>
      <AppText bold large color={AppTheme.WHITE}>
        {title}
      </AppText>
      <Space />
      <AppText semiLarge semiBold color={AppTheme.WHITE}>
        {subTitle}
      </AppText>

      <Space large />
      {/* modal comes here */}
    </Wrap>
  );
};

const mapStateToProps = state => {
  return {
    allData: state.home.allData || [],
    // menu: state.menu,
    // status: state.app.orderStatus,
    // user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // saveData: data => dispatch(saveCovidData(data)),
  };
};

export const Banner = connect(mapStateToProps, mapDispatchToProps)(BannerBase);
