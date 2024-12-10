import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../Common/Colors';
const {width} = Dimensions.get('window');

const CustomCarousel = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };

  const handleSkip = () => {
    navigation.navigate('options');
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={item.imgTitle}
              style={{
                height: 150,
                width: '80%',
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{padding: 20, flex: 0.5}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.description}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>
            {currentIndex === 1 || currentIndex === 2 ? '' : 'Skip'}
          </Text>
        </TouchableOpacity>
        <View style={styles.paginationContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        {currentIndex === data.length - 1 ? (
          <TouchableOpacity style={styles.nextButton} onPress={handleSkip}>
            <AntDesign name="caretright" size={20} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <AntDesign name="caretright" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  slide: {
    width: width,
    height: '100%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'skyblue',
  },
  nextButton: {
    backgroundColor: 'skyblue',
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButtonText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: -10,
  },
});
