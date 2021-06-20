import React from 'react';
import {View, Text} from 'react-native';
import {Banner} from '../../components/Banner/Banner';
import {ScreenBase} from '../ScreenBase/ScreenBase';

const HomeScreen = () => {
  return (
    <ScreenBase>
      <Banner />
      <Text>I am home</Text>
    </ScreenBase>
  );
};

export {HomeScreen};
