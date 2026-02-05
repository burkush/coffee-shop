import icedCoffeeImage from '@/assets/images/iced-coffee.png';
import { Link } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function AppIndex() {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage} style={styles.imageBackground}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/contact" asChild>
          <Pressable style={styles.buttonLink}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
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
  title: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    fontSize: 28,
    borderRadius: 8,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonLink: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
