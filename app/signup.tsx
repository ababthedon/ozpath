// SignupScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { router } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirm) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace('./(tabs)');
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OzPath</Text>
      <Text style={styles.title}>Create an Account</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
        <Text style={styles.loginText}>Sign Up</Text>
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