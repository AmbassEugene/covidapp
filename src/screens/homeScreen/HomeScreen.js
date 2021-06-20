import React, {useState} from 'react';
import {ActivityIndicator, useColorScheme, ScrollView} from 'react-native';
import {Banner} from '../../components/Banner/Banner';
import {ErrorComponent} from '../../components/ErrorComp/ErrorComp';
import {HomeContent} from '../../components/HomeContent/HomeContent';
import {AppTheme} from '../../config/theme';
import {ScreenBase} from '../ScreenBase/ScreenBase';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const colorScheme = useColorScheme();
  return (
    <ScreenBase>
      <Wrapper>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Banner title="Covid-19 Metrics" subTitle="India" />

          {/* <HomeContent /> */}

          {!!loading && (
            <ActivityIndicator
              color={AppTheme[colorScheme].TEXT}
              size="large"
            />
          )}
          <ErrorComponent />
        </ScrollView>
      </Wrapper>
    </ScreenBase>
  );
};

export {HomeScreen};
