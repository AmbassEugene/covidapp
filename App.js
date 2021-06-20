import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/config/store';
import {Routes} from './src/config/route';

const App = () => {
  // const colorScheme = useColorScheme();
  // color: AppTheme[colorScheme].TEXT,

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
