import { StyleSheet, Text, View } from 'react-native';

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
      <Text style={styles.title}>{coffeeShop.name}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{coffeeShop.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{coffeeShop.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Hours</Text>
        <Text style={styles.value}>Weekday: {coffeeShop.hours.weekday}</Text>
        <Text style={styles.value}>Weekend: {coffeeShop.hours.weekend}</Text>
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
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});
