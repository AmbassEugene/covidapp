import React, {useState, useEffect} from 'react';
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

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = () => {
    setLoading(true);
    axios
      .get('https://api.covid19india.org/data.json')
      .then(function (response) {
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
        <Banner title="Covid-19 Metrics" subTitle="India" />

        {/*  */}

        {loading ? (
          <AppLoader />
        ) : (
          <>
            {error ? <ErrorComponent action={getCovidData} /> : <HomeContent />}
          </>
        )}
      </Wrapper>
    </ScreenBase>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => dispatch(saveCovidData(data)),
    setActiveData: data => dispatch(setActiveData(data)),
  };
};

export const HomeScreen = connect(null, mapDispatchToProps)(HomeScreenBase);
