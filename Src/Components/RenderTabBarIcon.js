import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../Common/Colors';
import {screenMatrix} from '../Common/Styles';

const RenderTabBarIcon = props => {
  switch (props.routeName) {
    case 'home':
      return (
        <View style={styles.tabIconContainer}>
          <View style={[styles.iconParent]}>
            <Ionicons
              name={props.isFocused ? 'home' : 'home-outline'}
              color={props.isFocused ? colors.skyBlue : colors.grey}
              size={25}
            />
          </View>
          <Text style={[styles.screenLabel(props)]}>Home</Text>
        </View>
      );
    case 'saved':
      return (
        <View style={styles.tabIconContainer}>
          <View style={[styles.iconParent]}>
            <AntDesign
              name={props.isFocused ? 'heart' : 'hearto'}
              color={props.isFocused ? colors.skyBlue : colors.grey}
              size={25}
            />
          </View>
          <Text style={[styles.screenLabel(props)]}>Saved</Text>
        </View>
      );

    case 'Add':
      return (
        <TouchableOpacity style={styles.floatingButton}>
          <View
            style={{
              marginTop: -30,
              borderRadius: 50,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/Images/floating.png')}
              style={styles.imgStyle}
            />
          </View>
        </TouchableOpacity>
      );
    case 'notify':
      return (
        <View style={styles.tabIconContainer}>
          <View style={[styles.iconParent]}>
            <Ionicons
              name={props.isFocused ? 'notifications' : 'notifications-outline'}
              color={props.isFocused ? colors.skyBlue : colors.grey}
              size={25}
            />
          </View>
          <Text style={[styles.screenLabel(props)]}>Notification</Text>
        </View>
      );
    case 'chat':
      return (
        <View style={styles.tabIconContainer}>
          <View style={[styles.iconParent]}>
            <Ionicons
              name={
                props.isFocused
                  ? 'chatbox-ellipses'
                  : 'chatbox-ellipses-outline'
              }
              color={props.isFocused ? colors.skyBlue : colors.grey}
              size={25}
            />
          </View>
          <Text style={[styles.screenLabel(props)]}>Chat</Text>
        </View>
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenLabel: props => ({
    fontSize: 12,
    bottom: 5,
    color: props.isFocused ? colors.skyBlue : colors.grey,
  }),
  iconParent: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: screenMatrix.width / 10,
    width: screenMatrix.width / 10,
  },
  imgStyle: {
    height: screenMatrix.width / 4,
    width: screenMatrix.width / 4,
  },
  floatingButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonContent: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default RenderTabBarIcon;
