import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerText}>My Places</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="green" style={styles.icon} />
          <Ionicons name="filter" size={24} color="green" style={styles.icon} />
        </View>
      </View>

      {/* Favorite Places List */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={styles.card}>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.cardTitle}>Place {item}</Text>
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
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#32a852',
  },
  headerSpacer: {
    width: 28,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
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