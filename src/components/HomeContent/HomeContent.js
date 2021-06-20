import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  background-color: ${props => props.background};
`;

const HomeContent = () => {
  return (
    <Wrapper>
      <Text>I am HomeContent</Text>
    </Wrapper>
  );
};

export {HomeContent};
