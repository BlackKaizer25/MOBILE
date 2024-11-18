// component/ContactUs.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const ContactUs = ({ route, navigation }) => {
  // Get contact information from route params
  const { contactInfo } = route.params || {};

  if (!contactInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contact information not available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Image section with overlayed back arrow */}
      <View style={styles.imageContainer}>
        <Image source={contactInfo.image} style={styles.mainImage} />
        <View style={styles.headerOverlay}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Place Details Header */}
      <View style={styles.infoContainer}>
        <Text style={styles.placeName}>{contactInfo?.name || "No name available"}</Text>
        <Text style={styles.subtitle}>Mountain Top View</Text>

        {/* Star Rating */}
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star" size={20} color="gold" />
          ))}
        </View>

        {/* Location Row */}
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={16} color="green" />
          <Text style={styles.locationDetail}>{contactInfo?.location || "No location available"}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />
      </View>

      

      {/* Contact Information Section */}
      <View style={styles.contactInfoContainer}>
        {/* Contact Us Title */}
      <Text style={styles.contactustitle}>Contact us:</Text>
        <Text style={styles.contactText}>{contactInfo?.contactNumber || "No contact number available"}</Text>
        <Text style={styles.contactText}>{contactInfo?.email || "No email available"}</Text>
        <Text style={styles.contactAddress}>{contactInfo?.address || "No address available"}</Text>

        {/* Social Media Icons */}
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <FontAwesome name="facebook" size={24} color="white" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <FontAwesome name="twitter" size={24} color="white" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://telegram.org')}>
            <FontAwesome name="telegram" size={24} color="white" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  mainImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: 60,
    left: 15,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
    borderRadius: 50,
  },
  infoContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  placeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    width: '100%',
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 8,
    width: '100%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns stars closer to the subtitle
    width: '100%',
    marginTop: 0, // Ensures no gap above the rating
    marginBottom: 50, // Optional: add spacing below the stars if needed
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationDetail: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#4CAF50',
    marginVertical: 15,
  },
  contactustitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        
  },
  contactInfoContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  contactText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
  contactAddress: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
});

export default ContactUs;
