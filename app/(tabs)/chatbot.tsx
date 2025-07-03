import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="comments" size={60} color="#007AFF" style={styles.icon} />
      <Text style={styles.title}>AI Chatbot</Text>
      <Text style={styles.subtitle}>This is a blank slate for your future AI chatbot.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  icon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 40,
  },
}); 