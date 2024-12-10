import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../Common/Colors';
import {serviceArray, vacationTrips} from '../Common/Styles';
import Header from './Header';
const Categories = props => {
  const navigation = useNavigation();
  const places = ['river', 'beach', 'camp', 'hills'];

  const imageMapping = {
    river: require('../Assets/Images/River.png'),
    beach: require('../Assets/Images/Beach.png'),
    camp: require('../Assets/Images/camp.png'),
    hills: require('../Assets/Images/hills.png'),
  };

  const getRotations = arr => {
    let rotations = [];
    for (let i = 0; i < arr.length; i++) {
      const rotated = [...arr.slice(i), ...arr.slice(0, i)];
      rotations.push(rotated);
    }
    return rotations;
  };

  const rotatedPlaces = getRotations(places);
  const flattenedPlaces = rotatedPlaces.flat();

  const onPressNavigateDes = item => {
    navigation.navigate('description', item);
  };
  const renderItem = ({item, index}) => {
    const isFavorite = index === 0;
    return (
      <View>
        {props.route.params == 'mostVisit' ? (
          <>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => onPressNavigateDes(item)}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.place}</Text>
                <Text style={styles.subtitle}>{item.country}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
                <Text style={styles.price}>
                  ₹ {item.price.toLocaleString()}
                </Text>
              </View>
              <TouchableOpacity style={styles.favoriteIcon}>
                <AntDesign
                  name={isFavorite ? 'heart' : 'hearto'}
                  color={isFavorite ? colors.red : colors.grey}
                  size={20}
                />
              </TouchableOpacity>
              <View style={{marginTop: 50}}>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </>
        ) : props.route.params == 'services' ? (
          <TouchableOpacity style={styles.card}>
            <Image source={{uri: item.image}} style={styles.serviceImg} />
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: colors.transparent,
                alignItems: 'center',
              }}>
              <Text style={[styles.title, {flex: 1}]}>{item.type}</Text>
              <Image
                source={require('../Assets/Images/Group.png')}
                style={{height: 10, width: 10}}
              />
            </View>

            <Text style={styles.description}>{item.facilities}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐⭐⭐⭐⭐ </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={imageMapping[item]} style={styles.image} />
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {props.route.params == 'mostVisit' ? (
        <>
          <Header title={'Most Visited'} />
          <FlatList
            data={vacationTrips}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            contentContainerStyle={styles.listContainer}
          />
        </>
      ) : props.route.params == 'services' ? (
        <>
          <Header title={'services'} />
          <FlatList
            data={serviceArray}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.row}
          />
        </>
      ) : (
        <>
          <Header title={'Categories'} />
          <FlatList
            data={flattenedPlaces}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            numColumns={4}
            contentContainerStyle={styles.listContainer}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 3,
    marginVertical: 3,
  },
  image: {
    height: 120,
    width: 80,
    resizeMode: 'cover',
  },
  listContainer: {
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginVertical: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  bookButton: {
    backgroundColor: colors.skyBlue,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteText: {
    fontSize: 16,
    color: 'red',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: Dimensions.get('window').width / 2 - 20,
  },
  serviceImg: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    color: '#ffd700',
    fontSize: 16,
  },
});
