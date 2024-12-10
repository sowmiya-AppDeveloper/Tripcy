import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../Common/Colors';
import {serviceArray, vacationTrips} from '../Common/Styles';
import Header from '../Components/Header';

const Home = () => {
  const navigation = useNavigation();
  const imageMapping = [
    require('../Assets/Images/River.png'),
    require('../Assets/Images/Beach.png'),
    require('../Assets/Images/camp.png'),
    require('../Assets/Images/hills.png'),
  ];
  const onPressSeeAll = v => {
    navigation.navigate('categories', v);
  };
  const onPressNavigateDes = item => {
    navigation.navigate('description', item);
  };

  const renderCard = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPressNavigateDes(item)}>
      <ImageBackground source={{uri: item.image}} style={styles.cardImage}>
        <View style={styles.cardContent}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.heartIcon}>
          <Text style={styles.heartText}>❤️</Text>
        </TouchableOpacity>
        <View style={{marginTop: 70, marginHorizontal: 10}}>
          <Text style={styles.cardTitle}>{item.place}</Text>
          <Text style={styles.cardSubtitle}>{item.country}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  const renderServices = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={{uri: item.image}}
        style={{
          width: '100%',
          height: 100,
          backgroundColor: colors.black,
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>{item.type}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{marginBottom: 20}}>
        <Header from="home" />

        <View style={styles.contentContainer}>
          <View style={styles.textHolder}>
            <Text style={styles.categoryText}>Categories</Text>
            <TouchableOpacity onPress={onPressSeeAll}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            {imageMapping.map((image, index) => (
              <TouchableOpacity key={index} style={styles.imgContainer}>
                <Image source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.categoryText}>Most Visited</Text>
            <TouchableOpacity onPress={() => onPressSeeAll('mostVisit')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <FlatList
              data={vacationTrips}
              renderItem={renderCard}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.textHolder, {marginTop: 30}]}>
            <Text style={styles.categoryText}>Services</Text>
            <TouchableOpacity onPress={() => onPressSeeAll('services')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <FlatList
              data={serviceArray}
              renderItem={renderServices}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  categoryText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 18,
    color: colors.skyBlue,
  },
  imgContainer: {
    marginBottom: 10,
  },

  listContainer: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    height: 120,
    width: 80,
    resizeMode: 'cover',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 15,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  cardSubtitle: {
    color: colors.white,
  },
  ratingContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    elevation: 5,
  },
  heartText: {
    fontSize: 12,
  },

  text: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
  },
});
