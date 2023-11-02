import * as React from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';


const HomePage = () => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{color: '#000000', fontSize: 38, fontWeight: 'bold' }}>
        Chegamos na Outra Telaaaaa.
    </Text>
  </View>
  );
};

export default HomePage;

