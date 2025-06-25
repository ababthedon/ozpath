// LoginScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('./(tabs)');
    } catch (error: any) {
      console.log(error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OzPath</Text>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Please enter your login details.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#fff',
  },
  logo: {
    fontSize: 40, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 30,
  },
  title: {
    fontSize: 22, fontWeight: '600', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 30,
  },
  input: {
    width: '100%', backgroundColor: '#fff', borderRadius: 12, paddingHorizontal: 16,
    paddingVertical: 14, marginBottom: 12, fontSize: 16, shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 3, elevation: 3,
  },
  loginButton: {
    backgroundColor: '#000', borderRadius: 15, paddingVertical: 15,
    paddingHorizontal: 100, shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 4, elevation: 5,
  },
  loginText: {
    color: '#fff', fontSize: 18, fontWeight: '500',
  },
});