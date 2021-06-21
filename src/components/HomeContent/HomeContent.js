import React from 'react';
import {useColorScheme} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {AppTheme} from '../../config/theme';
import {AppText, Space, SpaceBetween} from '../styles';

const Wrapper = styled.View`
  margin-top: 10px;
  padding: 15px 30px;
`;

const Row = styled(SpaceBetween)`
  margin-bottom: 30px;
`;

const HomeContentBase = props => {
  const colorScheme = useColorScheme();
  const {activeData} = props;

  return (
    <Wrapper>
      <AppText semiBold italic center color={AppTheme[colorScheme].TEXT}>
        As on {`${activeData.lastupdatedtime}`}
      </AppText>
      <Space size="15px" />
      <DisplayTextRow title="Confirmed" value={activeData.confirmed} />
      <DisplayTextRow title="Active" value={activeData.active} />
      <DisplayTextRow title="Recovered" value={activeData.recovered} />
      <DisplayTextRow title="Death" value={activeData.deaths} />
    </Wrapper>
  );
};

const DisplayTextRow = ({title, value}) => {
  const colorScheme = useColorScheme();

  return (
    <Row>
      <AppText semiBold color={AppTheme[colorScheme].TEXT} semiLarge>
        {title}
      </AppText>
      <AppText color={AppTheme[colorScheme].TEXT} semiLarge>
        {value}
      </AppText>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    activeData: state.home.activeData || {},
  };
};

export const HomeContent = connect(mapStateToProps, null)(HomeContentBase);
