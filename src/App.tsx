import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import themes from './themes/index';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <ThemeProvider theme={themes.light}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  </>
);

export default App;
