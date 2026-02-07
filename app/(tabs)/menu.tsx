import { ThemedText } from '@/components/themed-text';
import { MENU_ITEMS } from '@/constants/MenuItems';
import { FlatList, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
      <ThemedText type="title" style={{ marginBottom: 20, fontSize: 24 }}>
        Look at our menu items
      </ThemedText>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={MENU_ITEMS}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <ThemedText>{item.name}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
          </View>
        )}
      />
    </View>
  );
}
