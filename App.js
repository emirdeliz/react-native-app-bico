import React from 'react';
import AppBico from './src/client';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppBico />
      </GestureHandlerRootView>
    );
  }
}
