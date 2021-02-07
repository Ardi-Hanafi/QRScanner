import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  const readQR = (e) =>{
    alert(e.data)
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraCon}>
          <QRCodeScanner
            onRead={readQR}
          />
        </View>
        <View style={styles.searchCon}>
          <View style={styles.garis}/>
          <Text style={styles.text}>Atau input ID Siswa Manual</Text>
          <TextInput
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Cari Siswa</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cameraCon: {
    height: '70%', width: '100%',
    backgroundColor: '#ffffff'
  },
  searchCon: {
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom: 0,
    height: '30%', width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    display:'flex',
    height: '100%', width: '100%',
  },
  garis: {
    height:5, width:'20%',
    backgroundColor: '#D1D5DB',
    marginTop: 7,
    borderRadius: 5,
  },
  text: {
    fontSize:16,
    color: '#52525B',
    marginTop: 20,
  },
  input: {
    width:'80%', height:50,
    backgroundColor: '#FAFAFA',
    marginTop: 15,
    borderRadius: 8,
    borderWidth: 1, borderColor:'#A1A1AA',
    fontSize: 16,
    color: '#4d4d4d',
    textAlign:'center'
  },
  btn: {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: '80%', height: 50,
    marginTop: 15,
    backgroundColor: '#10B981',
    borderRadius: 8
  },
  btnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight:'bold',
  }
});

export default App;
