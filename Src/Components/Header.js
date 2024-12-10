import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Common/Colors';

const Header = props => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {props.from === 'home' ? (
        <>
          <ImageBackground
            source={require('../Assets/Images/Ellipse.png')}
            style={styles.background}>
            <View style={styles.content}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../Assets/Images/Vector.png')}
                  style={styles.menuIcon}
                />
              </View>

              <View style={styles.logoContainer}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require('../Assets/Images/Group62.png')}
                    style={styles.avatarContainer}
                  />
                </View>
              </View>

              <Image
                source={require('../Assets/Images/profile.png')}
                style={styles.profileImage}
              />
            </View>

            <View style={styles.searchBar}>
              <Icon
                name="search"
                type="feather"
                color={colors.skyBlue}
                size={25}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search any places"
                placeholderTextColor="#aaa"
              />
            </View>
          </ImageBackground>
        </>
      ) : (
        <View style={styles.header}>
          <View style={styles.leftIcon}>
            <View style={styles.arrowContainer(props)}>
              <MaterialIcons
                name="arrow-back-ios"
                color={colors.black}
                size={20}
                style={{marginStart: 5}}
                onPress={onPressBack}
              />
            </View>
            <Text
              style={{
                fontSize: 20,
                color:
                  props.title === 'Place Details' ? colors.white : colors.black,
                fontWeight: '600',
                marginLeft: 60,
              }}>
              {props.title}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  leftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainer: props => ({
    borderWidth: props.title === 'Place Details' ? 1 : 0,
    backgroundColor: props.title === 'Place Details' ? colors.white : null,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
  }),
  rightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 10,
  },

  background: {
    height: 250,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  iconContainer: {},
  menuIcon: {
    height: 20,
    width: 20,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
