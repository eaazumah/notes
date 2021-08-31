/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './src/navigation/Navigator';
import Wrapper from './src/wrapper/Wrapper';
import {persistor, store} from './src/_shared/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper>
          <Navigator />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
