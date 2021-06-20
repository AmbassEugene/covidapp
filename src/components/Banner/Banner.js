import React, {useState} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import styled from 'styled-components';
import {AppTheme} from '../../config/theme';
import {AppText, Space} from '../styles';
import RNPickerSelect from 'react-native-picker-select';

const Wrap = styled.View`
  /* flex: 1; */
  height: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const option = [
  {label: 'Football', value: 'football'},
  {label: 'Baseball', value: 'baseball'},
  {label: 'Hockey', value: 'hockey'},
];

const Banner = ({title, subTitle, children, ...props}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const colorScheme = useColorScheme();

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
      {/* <RNPickerSelect
        onValueChange={value => console.log(value)}
        items={option}
      /> */}
    </Wrap>
  );
};

export {Banner};
