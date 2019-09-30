import React from 'react';
import Router from './src/router';
import { Root } from 'native-base';

import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

const App = prop => {
  return (
    <Root>
      <Router>
        <SafeAreaView>
        
        </SafeAreaView>
      </Router>
    </Root>
  )
}

export default App;