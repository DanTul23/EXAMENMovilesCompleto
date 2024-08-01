// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Menu');
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../../assets/cargando.gif')} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default SplashScreen;