import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/60' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>Hi, Clyde!</Text>
        <Text style={styles.exploreText}>Explore Damilag</Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search places, food, or services..."
          />
        </View>

        {/* Featured Attractions */}
        <Text style={styles.sectionTitle}>Featured Attractions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>

          {/* First Featured Attraction */}
          <View style={styles.card}>
          <Image source={require('../../assets/hills.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Damilag Hills</Text>
            <Text style={styles.cardSubtitle}>Enjoy the scenic views of the hills.</Text>
          </View>

          {/* Second Featured Attraction */}
          <View style={styles.card}>
          <Image source={require('../../assets/cafe.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Cafe 14-15</Text>
            <Text style={styles.cardSubtitle}>Relax at this cozy cafe.</Text>
          </View>

          {/* Third Featured Attraction */}
          <View style={styles.card}>
            <Image source={require('../../assets/concetta.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Concetta Tourist</Text>
            <Text style={styles.cardSubtitle}>Beautiful garden venue.</Text>
          </View>

          {/* Fourth Featured Attraction */}
          <View style={styles.card}>
            <Image source={require('../../assets/bamboo.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Bamboo Pavilion</Text>
            <Text style={styles.cardSubtitle}>Explore the Bamboo Pavilion.</Text>
          </View>
        </ScrollView>

        {/* Food Section */}
        <Text style={styles.sectionTitle}>Foods</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        
         {/* First Food */}
         <View style={styles.card}>
            <Image source={require('../../assets/umarika.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Umarika Cafe</Text>
            <Text style={styles.cardSubtitle}>Enjoy the scenic views of the hills.</Text>
          </View>

          {/* Second Food */}
          <View style={styles.card}>
            <Image source={require('../../assets/lady.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Lady's First Resto</Text>
            <Text style={styles.cardSubtitle}>Relax at this cozy cafe.</Text>
          </View>

          {/* Third Food */}
          <View style={styles.card}>
            <Image source={require('../../assets/rey.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Rey's Warehouse</Text>
            <Text style={styles.cardSubtitle}>Beautiful garden venue.</Text>
          </View>

          {/* Fourth Food */}
          <View style={styles.card}>
            <Image source={require('../../assets/baelly.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Baelly's Lechon House</Text>
            <Text style={styles.cardSubtitle}>Explore the Bamboo Pavilion.</Text>
          </View>
        </ScrollView>

        {/* Hotels and Accommodations Section */}
        <Text style={styles.sectionTitle}>Hotels and Accommodations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {/* First */}
         <View style={styles.card}>
            <Image source={require('../../assets/eunice.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Eunice Villa</Text>
            <Text style={styles.cardSubtitle}>Enjoy the scenic views of the hills.</Text>
          </View>

          {/* Second */}
          <View style={styles.card}>
            <Image source={require('../../assets/bcc.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>BCC Business Hotel</Text>
            <Text style={styles.cardSubtitle}>Relax at this cozy cafe.</Text>
          </View>

          {/* Third */}
          <View style={styles.card}>
            <Image source={require('../../assets/sebastian.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Sebastian's Place</Text>
            <Text style={styles.cardSubtitle}>Beautiful garden venue.</Text>
          </View>

        </ScrollView>

        {/* Other Services Section */}
        <Text style={styles.sectionTitle}>Other Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
           {/* First */}
         <View style={styles.card}>
            <Image source={require('../../assets/savemart.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Save Mart</Text>
            <Text style={styles.cardSubtitle}>Enjoy the scenic views of the hills.</Text>
          </View>

          {/* Second */}
          <View style={styles.card}>
            <Image source={require('../../assets/hardware.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Cuarteros Hardware</Text>
            <Text style={styles.cardSubtitle}>Relax at this cozy cafe.</Text>
          </View>

          {/* Third */}
          <View style={styles.card}>
            <Image source={require('../../assets/splash.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Concetta Tourist</Text>
            <Text style={styles.cardSubtitle}>Beautiful garden venue.</Text>
          </View>

        </ScrollView>

        {/* Transportation Section */}
        <Text style={styles.sectionTitle}>Transportation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
         {/* First */}
         <View style={styles.card}>
            <Image source={require('../../assets/bao.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Tric-cab</Text>
            <Text style={styles.cardSubtitle}>{/*asdfasdgasdg*/}</Text>
          </View>

          {/* Second */}
          <View style={styles.card}>
            <Image source={require('../../assets/multicab.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Multi-cab</Text>
            <Text style={styles.cardSubtitle}>{/*asdfasdgasdg*/}</Text>
          </View>

          {/* Third */}
          <View style={styles.card}>
            <Image source={require('../../assets/habal.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Habal-habal</Text>
            <Text style={styles.cardSubtitle}>{/*asdfasdgasdg*/}</Text>
          </View>
        </ScrollView>

        {/* Footer Section */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Cultural Guidelines</Text>
          <Text style={styles.footerDescription}>
            Visiting Damilag soon? Understanding basic language, religion, social etiquette, customs, protocols, and work culture is a must.
          </Text>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('BarangayDamilag')}>
            <Text style={styles.footerButtonText}>Read more</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#32a852',
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align content to the right
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    paddingTop: 30, // Adjusted padding to make space
  },
  headerRight: {
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30, 
  },
  contentContainer: {
    flexGrow: 1, // Use flexGrow to ensure content expands and is scrollable
    paddingHorizontal: 15,
    paddingBottom: 50, // Add padding at bottom to ensure content isn't cut off
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  exploreText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  footerContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  footerButton: {
    backgroundColor: '#32a852',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
