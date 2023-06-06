import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Home({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./img-lgn.png')} />
      <Text style={styles.title}>Login to your Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.cekbox}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Remember Account?</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.btn}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Menu')}>
        <Text
          style={{
            color: '#FFFF',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.daftarBtn}
        onPress={() => navigation.navigate('Daftar')}>
        <Text
          style={{
            color: '#FFFF',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      </View>
      
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 260,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
    height: 45,
    marginBottom: 25,
    alignItems: 'center',
    marginLeft: 30,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    marginTop: 1,
    marginLeft: 5
  },
  cekbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginTop: 1,
    marginLeft: 120
  },
  btn: {
    flexDirection: 'row',
    gap: 20
  },
  loginBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#21426D',
    marginLeft: 70
  },
  daftarBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#21426D',
    marginLeft: 10
  }
});
