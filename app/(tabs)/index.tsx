import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="home" size={50} color="#007AFF" />
        <Text style={styles.title}>Welcome to OzPath</Text>
        <Text style={styles.subtitle}>Your journey starts here</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <FontAwesome name="rocket" size={30} color="#34C759" />
          <Text style={styles.cardTitle}>Get Started</Text>
          <Text style={styles.cardText}>Begin your adventure with OzPath</Text>
        </View>
        
        <View style={styles.card}>
          <FontAwesome name="star" size={30} color="#FF9500" />
          <Text style={styles.cardTitle}>Discover</Text>
          <Text style={styles.cardText}>Explore new possibilities</Text>
        </View>
        
        <View style={styles.card}>
          <FontAwesome name="heart" size={30} color="#FF3B30" />
          <Text style={styles.cardTitle}>Connect</Text>
          <Text style={styles.cardText}>Build meaningful connections</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#1a1a1a',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
