import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../Common/Colors';
import Header from './Header';
const {width} = Dimensions.get('window');

const PlaceDetails = props => {
  const propData = props.route.params;
  const images = [
    {uri: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg'},
    {
      uri: 'https://images.pexels.com/photos/2100804/pexels-photo-2100804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/982673/pexels-photo-982673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/1850539/pexels-photo-1850539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const MAX_CHAR_LIMIT = 80;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <ImageBackground
          source={{uri: propData.image}}
          style={styles.backgroundImage}>
          <View style={styles.headerContainer}>
            <Header title={'Place Details'} />
          </View>

          <View style={styles.overlayImagesContainer}>
            {images.map((img, index) => (
              <Image key={index} source={img} style={styles.overlayImage} />
            ))}
          </View>
        </ImageBackground>

        <View style={styles.detailsContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>₹ {propData.price}</Text>
          </View>

          <Text style={styles.placeTitle}>Maldives Island</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome6 name="location-dot" size={20} color={colors.grey} />

            <Text style={styles.placeRegion}> South Asia</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.transparent,
              justifyContent: 'flex-end',
            }}>
            <View></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Feather name="package" size={22} color={colors.skyBlue} />

              <Text style={styles.packageText}> Package</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <AntDesign name="star" size={20} color={colors.skyBlue} />
            <View style={styles.content}>
              <Text style={{color: colors.darkGrey, fontWeight: '500'}}>
                Ratings
              </Text>
              <Text style={styles.ratingText}>4.5 (98k Reviews)</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={20}
              color={colors.skyBlue}
            />
            <View style={{marginHorizontal: 5}}>
              <Text style={{color: colors.darkGrey, fontWeight: '500'}}>
                Distance
              </Text>
              <Text style={styles.distanceText}>2030 Km</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.tripButton}>
            <Text style={styles.tripButtonText}>Trip Plans</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>
            {isExpanded
              ? propData.about
              : `${propData.about.slice(0, MAX_CHAR_LIMIT)}... `}
            <Text style={styles.readMoreText} onPress={toggleReadMore}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Text>
          </Text>

          <Text style={styles.sectionTitle}>Facilities</Text>
          {propData.facility.map((item, index) => (
            <Text style={styles.facilitiesText}>
              •{'  '} {item}
            </Text>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backButton: {
    fontSize: 24,
    color: '#333',
  },
  content: {
    marginHorizontal: 5,
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  backgroundImage: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  overlayImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 200,
  },
  overlayImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  priceContainer: {
    alignItems: 'center',
    position: 'absolute',

    right: 15,
    backgroundColor: '#4ca6e6',
    padding: 15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  packageText: {
    fontSize: 12,
    color: colors.black,
  },
  placeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  placeRegion: {
    fontSize: 14,
    color: colors.darkGrey,
    marginVertical: 5,
  },
  infoRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 14,
    color: colors.black,
  },
  distanceText: {
    fontSize: 14,
    color: colors.black,
  },
  favoriteIcon: {
    fontSize: 20,
    color: 'red',
  },
  tripButton: {
    backgroundColor: colors.skyBlue,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
  },
  tripButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#555',
  },

  bookButton: {
    backgroundColor: '#4ca6e6',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: width - 40,
    alignSelf: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  readMoreText: {
    color: '#4ca6e6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  facilitiesText: {
    color: colors.darkGrey,
    marginVertical: 2,
    fontSize: 14,
  },
});
