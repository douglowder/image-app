import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, StyleSheet } from 'react-native';

// const requireStar = require('./assets/star.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Initial app state</Text>
      {/*
      <Image source={requireStar} />
        */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
