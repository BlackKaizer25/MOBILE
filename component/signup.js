import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [businessName, setBusinessName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Food');
  const [location, setLocation] = useState('Purok 7 - Barangay Demo');
  const [role, setRole] = useState('Business Owner');
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Password visibility state

  const [isRolePickerVisible, setRolePickerVisible] = useState(false);
  const [isBusinessTypePickerVisible, setBusinessTypePickerVisible] = useState(false);
  const [isLocationPickerVisible, setLocationPickerVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible); // Toggle visibility
  };

  const handleSignUp = () => {
    // Navigate to LoginScreen after sign up
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Business Owner</Text>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        <FontAwesome name="camera" size={20} color="green" style={styles.cameraIcon} />
      </TouchableOpacity>

      {/* Business Name */}
      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Business name"
          value={businessName}
          onChangeText={setBusinessName}
        />
      </View>

      {/* Username */}
      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password */}
      <View style={styles.inputGroup}>
        <FontAwesome name="lock" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible} // Toggle visibility
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Entypo name={isPasswordVisible ? 'eye-with-line' : 'eye'} size={20} color="grey" style={styles.iconRight} />
        </TouchableOpacity>
      </View>

      {/* Role Picker */}
      <Text style={styles.label}>Role</Text>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setRolePickerVisible(true)}>
        <FontAwesome name="user" size={20} color="green" style={styles.icon} />
        <Text style={styles.pickerText}>{role}</Text>
        <Entypo name="chevron-down" size={20} color="grey" style={styles.iconRight} />
      </TouchableOpacity>

      {/* Role Modal */}
      <Modal visible={isRolePickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Role</Text>
            <TouchableOpacity onPress={() => { setRole('Business Owner'); setRolePickerVisible(false); }} style={styles.modalItem}>
              <Text>Business Owner</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setRole('Customer'); setRolePickerVisible(false); }} style={styles.modalItem}>
              <Text>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRolePickerVisible(false)} style={styles.modalCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Email Address */}
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inputGroup}>
        <FontAwesome name="envelope" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Business Type */}
      <Text style={styles.label}>Business Type</Text>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setBusinessTypePickerVisible(true)}>
        <FontAwesome name="industry" size={20} color="green" style={styles.icon} />
        <Text style={styles.pickerText}>{businessType}</Text>
        <Entypo name="chevron-down" size={20} color="grey" style={styles.iconRight} />
      </TouchableOpacity>

      {/* Business Type Modal */}
      <Modal visible={isBusinessTypePickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Business Type</Text>
            <TouchableOpacity onPress={() => { setBusinessType('Food'); setBusinessTypePickerVisible(false); }} style={styles.modalItem}>
              <Text>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setBusinessType('Retail'); setBusinessTypePickerVisible(false); }} style={styles.modalItem}>
              <Text>Retail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setBusinessType('Services'); setBusinessTypePickerVisible(false); }} style={styles.modalItem}>
              <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBusinessTypePickerVisible(false)} style={styles.modalCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Location */}
      <Text style={styles.label}>Location</Text>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setLocationPickerVisible(true)}>
        <FontAwesome name="map-marker" size={20} color="green" style={styles.icon} />
        <Text style={styles.pickerText}>{location}</Text>
        <Entypo name="chevron-down" size={20} color="grey" style={styles.iconRight} />
      </TouchableOpacity>

      {/* Location Modal */}
      <Modal visible={isLocationPickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Location</Text>
            <TouchableOpacity onPress={() => { setLocation('Purok 7 - Barangay Demo'); setLocationPickerVisible(false); }} style={styles.modalItem}>
              <Text>Purok 7 - Barangay Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setLocation('Purok 8 - Barangay Demo'); setLocationPickerVisible(false); }} style={styles.modalItem}>
              <Text>Purok 8 - Barangay Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLocationPickerVisible(false)} style={styles.modalCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  pickerText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalCancel: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#FF5722',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
