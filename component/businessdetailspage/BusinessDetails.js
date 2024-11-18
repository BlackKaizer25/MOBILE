// component/BusinessDetails.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import placesdata from './placesdata';

const BusinessDetails = ({ route, navigation }) => {
  const { place } = route.params || {};
  const placeDetails = placesdata[place?.name];

  if (!placeDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Place details not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Image with Overlayed Header */}
      <View style={styles.imageContainer}>
        <Image source={placeDetails.images[0]} style={styles.mainImage} />
        <View style={styles.headerOverlay}>
          {/* Updated onPress to navigate to FavoritesScreen */}
          <TouchableOpacity onPress={() => navigation.navigate('FavoritesList')} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Place Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{placeDetails.name}</Text>
        <Text style={styles.subtitle}>Mountain Top View</Text>
        <View style={styles.locationRow}>
        </View>

        {/* Star Rating */}
        <View style={styles.ratingContainer}>
          {[...Array(placeDetails.rating)].map((_, i) => (
            <Ionicons key={i} name="star" size={20} color="gold" />
          ))}
        </View>

        {/* Location Pin */}
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={16} color="green" />
          <Text style={styles.locationDetail}>{placeDetails.location}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Overview Title */}
        <Text style={styles.overviewTitle}>OVERVIEW</Text>

        {/* Editable Description */}
        <Text style={styles.description}>{placeDetails.description}</Text>

        {/* Read More Button */}
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreButtonText}>Read More</Text>
        </TouchableOpacity>

         {/* Action Buttons Section */}
<View style={styles.actionContainer}>
  <TouchableOpacity style={styles.actionButton}>
    <Ionicons name="people-outline" size={30} color="black" />
    <Text style={styles.actionText}>Location</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.actionButton}>
    <FontAwesome5 name="user-check" size={30} color="black" />
    <Text style={styles.actionText}>Guidelines</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.actionButton}>
    <FontAwesome5 name="percentage" size={30} color="black" />
    <Text style={styles.actionText}>Prices</Text>
  </TouchableOpacity>
  <TouchableOpacity 
  onPress={() => navigation.navigate('ContactUs', { 
    contactInfo: {
      contactNumber: placeDetails.contactNumber,
      email: placeDetails.email,
      address: placeDetails.address,
      name: placeDetails.name,
      image: placeDetails.images[0],
      location: placeDetails.location,
    } 
  })} 
  style={styles.actionButton}>
  <FontAwesome5 name="address-book" size={30} color="black" />
  <Text style={styles.actionText}>Contact Us</Text>
  </TouchableOpacity>



</View>


          {/* Go there now Button */}
        <TouchableOpacity style={styles.goThereButton}>
          <Text style={styles.goThereButtonText}>Go there now!</Text>
        </TouchableOpacity>

        {/* Photos Section */}
        <View style={styles.photosContainer}>
          <Text style={styles.photosTitle}>Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={placeDetails.images[0]} style={styles.photo} />
            <Image source={require('../assets/bao.png')} style={styles.photo} />
            <Image source={require('../assets/tree.png')} style={styles.photo} />
            <Image source={require('../assets/bamboo.png')} style={styles.photo} />
            <Image source={require('../assets/eunice.png')} style={styles.photo} />
            <Image source={require('../assets/damilag.png')} style={styles.photo} />
            <Image source={require('../assets/brigada.png')} style={styles.photo} />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 300, // Increased height to extend the image further down
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'cover', // Ensures the image covers the entire container without distortion
  },
  headerOverlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 5,
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    width:'100%',
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 2, // Reduced margin to bring subtitle closer to rating
    width: '100%',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  overviewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    width: '100%',
  },
  location: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns stars closer to the subtitle
    width: '100%',
    marginTop: 0, // Ensures no gap above the rating
    marginBottom: 50, // Optional: add spacing below the stars if needed
},
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  readMoreButton: {
    backgroundColor: '#32a852',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    width: '80%',
    marginTop: 20,
  },
  readMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  actionButton: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    fontWeight: '500',
  },
  goThereButton: {
    backgroundColor: '#32a852',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    width: '80%',
    marginTop: 20,
  },
  goThereButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photosContainer: {
    width: '100%',
    marginTop: 20,
  },
  photosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photo: {
    width: 120,          // Increased width to match the provided image size
    height: 180,         // Increased height for a more balanced aspect ratio
    borderRadius: 15,    // Increased border radius for rounded corners
    marginHorizontal: 8, // Slightly increased spacing between images
},
});

export default BusinessDetails;
