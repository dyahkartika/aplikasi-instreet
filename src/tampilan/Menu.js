import React, {useState, Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

function BerandaScreen({ navigation }) {
  const dataPerusahaan = [
    {
      nama: 'Front-end Developer Intern',
      image: require('./a.jpg'),
      company: 'Tech JID',
      alamat: 'Jakarta Barat',
      waktu: 'Full Time',
    },
    {
      nama: 'Software Developer Intern',
      image: require('./b.jpg'),
      company: 'PT. Akselaran Indonesia',
      alamat: 'Bandung',
      waktu: 'Full Time',
    },
    {
      nama: 'Back-End Engineer (Java)',
      image: require('./c.jpg'),
      company: 'PT. Juke Solusi Teknologi',
      alamat: 'Jakarta Pusat',
      waktu: 'Full Time',
    },
  ];

  return (
    <View style={styles.container}>
	  <View style={styles.inputContainer}>
          <Icon name="search" size={20} />
          <TextInput
            style={{ flex: 1, fontSize: 15, marginLeft: 6 }}
            placeholder="Search"
          />
      </View>
      <FlatList
        data={dataPerusahaan}
        renderItem={({ item }) => (
          <View style={styles.jobContainer}>
            <View style={styles.judul}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.image1}></Image>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.nama}</Text>
                <Text style={styles.content1}>{item.company}</Text>
              </View>
            </View>
            <View>
              <View style={styles.icon}>
                <Icon name="home" size={15} />
                <Text style={styles.content2}>{item.alamat}</Text>
              </View>
            </View>
            <View>
              <View style={styles.icon2}>
                <Icon name="clock" size={15} />
                <Text style={styles.content2}>{item.waktu}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Detail')}>
              <Text style={styles.teksbotton}>More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

function ProfilScreen({navigation}) {
  const tanyakeluar = () =>
    Alert.alert('Confirmation', 'Are you sure want to exit ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
  return (
    <View style={styles.container2}>
      <Image style={styles.profileimage} source={require('./akun.png')} />
      <View style={styles.profilekl1}>
        <Image style={styles.profileimages} source={require('./akun1.png')} />
        <Text style={styles.profiletext}>Leonardo Edwin</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#fff', marginTop: 10}}/>
      <View style={styles.profilekl2}>
        <Image style={styles.profileimages} source={require('./birth.png')} />
        <Text style={styles.profiletext}>7 Mei 2000</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#fff', marginTop: 10}}/>
      <View style={styles.profilekl3}>
        <Image style={styles.profileimages} source={require('./email.png')} />
        <Text style={styles.profiletext}>leodwin@gmail.com</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#fff', marginTop: 10}}/>
      <View style={styles.profilebtn}>
      <Button title={'Log Out'} onPress={tanyakeluar} />
      </View>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function Menu({navigation}) {
  return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'user' : 'user';
            } 

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
          <Tab.Screen name="Beranda" component={BerandaScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} />
        </Tab.Navigator>
      </View>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21426D',
  },
  jobContainer: {
    flexDirextion: 'row',
    padding: 5,
    backgroundColor: '#fff',
    width: 390,
    height: 220,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 5
  },
  judul: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: 400,
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 8,
    height: 55,
    marginLeft: 7,
    marginBottom: 5
  },
  image1: {
    width: 95,
    height: 95,
    borderRadius: 20,
    marginTop: 10
  },
  titleContainer: {
    width: 300,
    height: 70,
    marginLeft: 14,
    marginTop: 40,
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    
  },
  content1: {
    fontSize: 15,
    color: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content2: {
    fontSize: 15,
    color: 'black',
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#21426D',
    paddingVertical: 10,
    // paddingHorizontal:10,
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: 100,
    marginLeft: 260,
    marginBottom: 10
  },
  teksbotton: {
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  icon2: {
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#21426D',
    
  },
  profileimage: {
    width: '100%',
    height: 100,
  },
  profilekl1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  profilekl2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profilekl3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profiletext: {
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
    marginLeft: 25,
    marginBottom: 10
  },
  profileimages: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10
  },
  profilebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 80
  },
});
