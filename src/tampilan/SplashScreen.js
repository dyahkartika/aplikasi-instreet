import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#6E85B7" />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0C2950',
          }}>
          <View style={{ paddingTop: 45, alignItems: 'center' }}>
            <Image
              source={require('./instreet.png')}
              style={{ width: 200, height: 300 }}></Image>
          </View>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
