import React from 'react';
import {useColorScheme, FlatList} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';
import {AppText} from '../../components/styles';
import {connect} from 'react-redux';
import {setActiveData} from '../../redux/action/home';
import {ScreenBase} from '../ScreenBase/ScreenBase';

const Wrap = styled.View`
  flex: 1;
`;

const HeaderWrap = styled.View`
  height: 15%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const ListWrap = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-color: ${props => props.border};
  border-bottom-width: 0.5px;
  margin-bottom: 2px;
`;

const StateScreenBase = ({navigation, ...props}) => {
  const handleStateSelect = stateObj => {
    props.setActiveData(stateObj);
    navigation.navigate('Home');
  };

  return (
    <ScreenBase>
      <Wrap>
        <HeaderWrap backgroundColor={AppTheme.PRIMARY}>
          <AppText center color={AppTheme.WHITE} bold large>
            Select State
          </AppText>
        </HeaderWrap>

        <FlatList
          data={props.allData}
          renderItem={data => (
            <StateItemList action={handleStateSelect} stateObj={data.item} />
          )}
          keyExtractor={item => item.id}
        />
      </Wrap>
    </ScreenBase>
  );
};

const StateItemList = ({stateName, action, stateObj}) => {
  const colorScheme = useColorScheme();

  return (
    <ListWrap
      border={AppTheme[colorScheme].TEXT}
      onPress={() => action(stateObj)}>
      <AppText color={AppTheme[colorScheme].TEXT} semiLarge>
        {stateObj.state}
      </AppText>
    </ListWrap>
  );
};

const mapStateToProps = state => {
  return {
    allData: state.home.allData || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveData: data => dispatch(setActiveData(data)),
  };
};

export const StateScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateScreenBase);
