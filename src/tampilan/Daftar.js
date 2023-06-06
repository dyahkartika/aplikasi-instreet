import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Button
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Daftar({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [nama, setName] = useState('');
  const [password, setPassword] = useState('');
  const statustersimpan = () =>
    Alert.alert('Data saved', '', [
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.kembali}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="angle-left"
            style={styles.kembalii}
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      {/* <Image style={styles.image} source={require('./img-lgn.png')} /> */}
      <ScrollView>
      <Text style={styles.title}>Create your Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.datepic}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={styles.datepick}>Birth Date</Text>
        </TouchableOpacity>
        <DatePicker
          locale="id"
          mode="date"
          modal
          open={open}
          date={date}
          androidVariant="nativeAndroid"
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            console.log(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.daftarbtn}>
        <Button title={'Sign Up'} onPress={statustersimpan} />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  kembali: {
    height: 60,
    width: '100%',
    backgroundColor: '#21426D'
  },
  kembalii: {
    marginTop: 10,
    marginLeft: 20,
    
  },
  title: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 30,
  },
//   image: {
//     width: '100%',
//     height: 250,
//     marginBottom: 20,
//   },
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  datepic: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
    height: 45,
    marginBottom: 20,
    marginLeft: 30,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  datepick: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  daftarBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#21426D',
    marginLeft: 140,
    marginBottom: 20
  },
  daftarbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 30
  }
});
