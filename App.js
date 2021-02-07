import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
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
      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cameraCon: {
    height: 'auto', width: '100%',
    backgroundColor: 'red'
  },
  container: {
    display:'flex',
    height: '100%', width: '100%',
    backgroundColor: 'blue'
  }
});

export default App;
