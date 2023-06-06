import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Detail ({navigation}) {
  return (
<View style={styles.container}>
<ScrollView>
      <View style={{paddingVertical: 20, flexDirection: 'row', alignItems: 'center',backgroundColor: '#21426D'}}>
        <Icon style={{marginLeft:20, color: '#fff'}} name="arrow-left" size={20} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: '#fff'}}>Details</Text>
      </View>
      <View style={styles.detailContainer}>
          <View style={styles.judul}>
            <Image
              source={require('./a.jpg')}
              resizeMode="contain"
              style={styles.image1}/>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Front-End Developer Intern
              </Text>
              <Text style={styles.content1}>Tech JID</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <Icon name="home" size={15} /> 
            <Text style={styles.content2}>Jakarta Barat</Text>
          </View>

          <View style={styles.icon2}>
            <Icon name="clock" size={15} />
            <Text style={styles.content2}>Full Time</Text>
          </View>
           <View style={styles.icon2}>
            <Icon name="calendar" size={15} />
            <Text style={styles.content2}>16 Feb 2023 - 30 Jun 2023</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 5}}/>
          <Text style={styles.kriteria}>Kriteria Peserta</Text>
          <View style={styles.kriteriaa}>
            <Text style={styles.teks}>Jurusan : Teknik Informatika, Teknik Komputer,& Sistem Informasi</Text>
            <Text style={styles.teks}>Jenjang : S1</Text>
            <Text style={styles.teks}>Minimal : Semester 6</Text>
            <Text style={styles.teks}>Mohon sertakan CV dan transkrip nilai dalam 1 file PDF ketika mendaftar.</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 10}}/>
          <Text style={styles.skill}>Skills</Text>
          <View style={styles.skills}>
            <Text style={styles.teks}>- Mahir dalam mengoperasikan client-side web technology(HTML, CSS, JavaScript){'\n'}</Text>
            <Text style={styles.teks}>- Mahir dalam mengoperasikan alat desain (Sketch, Adobe Photoshop)</Text>
          </View>
          </View>

</ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff"
  },
  detailContainer: {
    flexDirextion: 'row',
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  judul: {
    flexDirection: 'row',
  },
  image1: {
    width: 95,
    height: 95,
    borderRadius: 20,
    marginTop: 10
  },
  titleContainer: {
    width: 300,
    height: 20,
    marginLeft: 14,
    marginTop: 40,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    // padding: 10,
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
  icon: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  icon2: {
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  skill: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 10
  },
  kriteria: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 10
  },
  kriteriaa: {
    marginLeft: 10,
    fontSize: 10,
    gap: 10
  },
  skills: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 10,
  },
  teks: {
    fontSize: 15,
    color: 'black',
  }
});

export default Detail;