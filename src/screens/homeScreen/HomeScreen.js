import React, {useState, useEffect} from 'react';
import {useColorScheme, ScrollView} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {Banner} from '../../components/Banner/Banner';
import {ErrorComponent} from '../../components/ErrorComp/ErrorComp';
import {HomeContent} from '../../components/HomeContent/HomeContent';
import {ScreenBase} from '../ScreenBase/ScreenBase';
import styled from 'styled-components';

import {AppLoader} from '../../components/AppLoader/AppLoader';
import {saveCovidData, setActiveData} from '../../redux/action/home';

const Wrapper = styled.View`
  flex: 1;
`;

const HomeScreenBase = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [result, setResult] = useState([]);
  const colorScheme = useColorScheme();

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = () => {
    setLoading(true);
    axios
      .get('https://api.covid19india.org/data.json')
      .then(function (response) {
        // setResult(response.data.statewise);
        props.saveData(response.data.statewise);
        props.setActiveData(response.data.statewise[0]);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
      })
      .then(function () {
        setLoading(false);
      });
  };
  return (
    <ScreenBase>
      <Wrapper>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Banner title="Covid-19 Metrics" subTitle="India" />

          {/*  */}

          {loading ? (
            <AppLoader />
          ) : (
            <>
              {error ? (
                <ErrorComponent action={getCovidData} />
              ) : (
                <HomeContent />
              )}
            </>
          )}
        </ScrollView>
      </Wrapper>
    </ScreenBase>
  );
};

const mapStateToProps = state => {
  return {
    // cart: state.cart,
    // menu: state.menu,
    // status: state.app.orderStatus,
    // user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => dispatch(saveCovidData(data)),
    setActiveData: data => dispatch(setActiveData(data)),
  };
};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenBase);
