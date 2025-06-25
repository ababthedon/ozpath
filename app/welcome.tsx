// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// ✅ Correct: Default export
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OzPath</Text>
      <Text style={styles.title}>Your Migration Companion</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.secondary]} 
        onPress={() => router.push('/signup')}
      >
        <Text style={[styles.buttonText, styles.secondaryText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20,
  },
  logo: {
    fontSize: 40, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 20,
  },
  title: {
    fontSize: 18, color: '#333', marginBottom: 40, textAlign: 'center',
  },
  button: {
    backgroundColor: '#000', paddingVertical: 15, paddingHorizontal: 80, borderRadius: 12, marginBottom: 20,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: '500',
  },
  secondary: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#000',
  },
  secondaryText: {
    color: '#000',
  },
});