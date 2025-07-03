import { StyleSheet, Switch, View } from 'react-native';
import { Text } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="cog" size={50} color="#007AFF" />
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your experience</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <FontAwesome name="bell" size={20} color="#007AFF" />
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={notificationsEnabled ? '#007AFF' : '#f4f3f4'}
            />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <FontAwesome name="moon-o" size={20} color="#007AFF" />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={darkModeEnabled ? '#007AFF' : '#f4f3f4'}
            />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <FontAwesome name="map-marker" size={20} color="#007AFF" />
              <Text style={styles.settingText}>Location Services</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={locationEnabled ? '#007AFF' : '#f4f3f4'}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuItem}>
            <FontAwesome name="user" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Edit Profile</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
          <View style={styles.menuItem}>
            <FontAwesome name="lock" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Change Password</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
          <View style={styles.menuItem}>
            <FontAwesome name="shield" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Privacy & Security</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.menuItem}>
            <FontAwesome name="question-circle" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Help Center</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
          <View style={styles.menuItem}>
            <FontAwesome name="envelope" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Contact Support</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
          <View style={styles.menuItem}>
            <FontAwesome name="info-circle" size={20} color="#007AFF" />
            <Text style={styles.menuText}>About OzPath</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <View style={styles.menuItem}>
            <FontAwesome name="file-text-o" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Terms of Service</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
          <View style={styles.menuItem}>
            <FontAwesome name="eye" size={20} color="#007AFF" />
            <Text style={styles.menuText}>Privacy Policy</Text>
            <FontAwesome name="chevron-right" size={16} color="#ccc" />
          </View>
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
    paddingBottom: 30,
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
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    color: '#1a1a1a',
    marginLeft: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#1a1a1a',
    marginLeft: 12,
    flex: 1,
  },
}); 