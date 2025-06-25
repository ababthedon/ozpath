// app/index.tsx
import { Redirect } from 'expo-router';
//import { useAuth } from '../context/AuthContext'; // Optional: if using auth

export default function Index() {
  // If using auth, you can check auth state here
  // const { user } = useAuth();
  
  // For now, just redirect to welcome screen
  return <Redirect href="/welcome" />;
}