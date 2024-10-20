import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your images from the assets folder
import place1 from '../assets/umarika.png';
import place2 from '../assets/eunice.png';
import place3 from '../assets/rey.png';
import place4 from '../assets/hardware.png';

const FavoritesScreen = () => {
  // Define an array with the local image imports for each place
  const places = [
    { id: 1, name: 'Umarika Cafe', image: place1 },
    { id: 2, name: 'Eunice Villa', image: place2 },
    { id: 3, name: 'Reys Warehouse', image: place3 },
    { id: 4, name: 'Cuarteros Hardware', image: place4 },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Places</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="white" style={styles.icon} />
          <Ionicons name="filter" size={24} color="white" style={styles.icon} />
        </View>
      </View>

      {/* Favorite Places List */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {places.map((place) => (
          <View key={place.id} style={styles.card}>
            <Image source={place.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>{place.name}</Text>
                <View style={styles.ratingContainer}>
                  {[...Array(5)].map((_, index) => (
                    <Ionicons key={index} name="star" size={16} color="gold" />
                  ))}
                </View>
              </View>
              <Text style={styles.cardSubtitle}>Purok 15, Damilag, Manolo Fortich, Bukidnon</Text>
            </View>
          </View>
        ))}

        {/* Discover More Button */}
        <TouchableOpacity style={styles.discoverButton}>
          <Text style={styles.discoverButtonText}>Discover More</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
    paddingHorizontal: 15,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#32a852',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 30,
    paddingLeft: 145,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    paddingVertical: 20,
    paddingRight: 15,
    justifyContent: 'center',
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  discoverButton: {
    backgroundColor: '#32a852',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
  },
  discoverButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
