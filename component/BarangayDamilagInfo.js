import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BarangayDamilag = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
        <Text style={styles.headerText}>Barangay Damilag</Text>
        <Text style={styles.subHeaderText}>Located in Bukidnon, Philippines</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star-half" size={20} color="gold" />
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Barangay Damilag is located in Manolo Fortich, Bukidnon, Philippines. It is one of the many barangays that make up the municipality. The barangay is known for its active community programs and local attractions.
        </Text>
        <TouchableOpacity style={styles.goodNewsButton}>
          <Text style={styles.goodNewsText}>Good News</Text>
        </TouchableOpacity>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <FontAwesome name="users" size={30} color="black" />
          <Text style={styles.featureText}>Population</Text>
        </View>
        <View style={styles.featureItem}>
          <FontAwesome name="user" size={30} color="black" />
          <Text style={styles.featureText}>Leaders</Text>
        </View>
        <View style={styles.featureItem}>
          <FontAwesome name="calendar" size={30} color="black" />
          <Text style={styles.featureText}>Events</Text>
        </View>
        <View style={styles.featureItem}>
          <FontAwesome name="info-circle" size={30} color="black" />
          <Text style={styles.featureText}>Information</Text>
        </View>
      </View>

      {/* Images */}
      <View style={styles.imagesContainer}>
        <Image source={{ uri: 'https://example.com/image1.jpg' }} style={styles.image} />
        <Image source={{ uri: 'https://example.com/image2.jpg' }} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  summaryContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  goodNewsButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  goodNewsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    marginTop: 10,
    fontSize: 14,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
});

export default BarangayDamilag;