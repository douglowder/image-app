import { StatusBar } from 'expo-status-bar';
import { Image, View, StyleSheet } from 'react-native';

import star from './assets/star.png';
const requireStar = require('./assets/star.png');

export default function App() {
	return (
		<View style={styles.container}>
			<Image source={star} />
			<Image source={requireStar} />
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
