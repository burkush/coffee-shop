import { ThemedText } from '@/components/themed-text';
import { StyleSheet, View } from 'react-native';

const coffeeShop = {
  name: 'Information',
  address: '123 Main Street, Downtown',
  phone: '(555) 123-4567',
  hours: {
    weekday: '6:00 AM - 8:00 PM',
    weekend: '7:00 AM - 9:00 PM',
  },
};

export default function CoffeeShopInfo() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        {coffeeShop.name}
      </ThemedText>

      <View style={styles.section}>
        <ThemedText style={styles.label}>Address</ThemedText>
        <ThemedText style={styles.value}>{coffeeShop.address}</ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.label}>Phone</ThemedText>
        <ThemedText style={styles.value}>{coffeeShop.phone}</ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.label}>Hours</ThemedText>
        <ThemedText style={styles.value}>
          Weekday: {coffeeShop.hours.weekday}
        </ThemedText>
        <ThemedText style={styles.value}>
          Weekend: {coffeeShop.hours.weekend}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
  },
});
