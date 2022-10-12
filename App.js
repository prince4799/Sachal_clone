
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import configurestore from './app/api/stores/Store'
import { Provider } from 'react-redux'

import AppStack from './app/navigation/AppStack';
const store = configurestore();


const App = () => {




  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};


export default App;
