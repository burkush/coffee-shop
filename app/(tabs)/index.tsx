import icedCoffeeImage from '@/assets/images/iced-coffee.png';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function AppIndex() {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage} style={styles.imageBackground}>
        <Text style={styles.heading}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    fontSize: 28,
    borderRadius: 8,
    fontWeight: 'bold',
  },
});
