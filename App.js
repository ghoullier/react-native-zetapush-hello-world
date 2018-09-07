import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WeakClient } from '@zetapush/client';

import 'proxy-polyfill';

console.log('Proxy', Proxy);

export default class App extends React.Component {
  onPress() {
    console.log('onPress');
    const client = new WeakClient({
      appName: 'ZsNvUVE3'
    });
    const api = client.createProxyTaskService();
    client.connect()
      .then(() => console.log('connected'))
      .then(() => api.hello())
      .then((message) => console.log('message', message))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.onPress()}>Connect!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
