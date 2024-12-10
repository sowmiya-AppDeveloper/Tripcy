import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ConfirmPassword from '../App/ConfirmPassword';
import ForgotPassword from '../App/ForgotPassword';
import Login from '../App/Login';
import OptionScreen from '../App/OptionScreen';
import OtpScreen from '../App/OtpScreen';
import SignUp from '../App/SignUp';
import Chat from '../BottomTabs/Chat';
import Home from '../BottomTabs/Home';
import Notify from '../BottomTabs/Notify';
import Saved from '../BottomTabs/Saved';
import {colors} from '../Common/Colors';
import {screenMatrix} from '../Common/Styles';
import Categories from '../Components/Categories';
import Description from '../Components/Description';
import RenderTabBarIcon from '../Components/RenderTabBarIcon';
import SplashScreen from '../Splash/SplashScreen';
import Tour from '../Tour/Tour';

export const navigateRef = createNavigationContainerRef();

const Route = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTab = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        backBehavior="none"
        tabBar={props => <HomeTabBar {...props} />}>
        <Tab.Screen
          name={'home'}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            color: colors.baseBackground,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={'saved'}
          component={Saved}
          options={{
            backgroundColor: colors.white,
            headerShown: false,
          }}
        />
        <Tab.Screen name={'Add'} component={Home} />
        <Tab.Screen
          name={'notify'}
          component={Notify}
          options={{
            backgroundColor: colors.white,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={'chat'}
          component={Chat}
          options={{
            backgroundColor: colors.white,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_left',
          }}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="forgot"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="otp"
          component={OtpScreen}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
          name="confirm"
          component={ConfirmPassword}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_right',
          }}
          name="options"
          component={OptionScreen}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_right',
          }}
          name="homeTab"
          component={HomeTab}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_right',
          }}
          name="categories"
          component={Categories}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_right',
          }}
          name="description"
          component={Description}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            gestureEnabled: true,
            navigationBarHidden: true,
            headerShown: false,
            animation: 'slide_from_right',
          }}
          name="tour"
          component={Tour}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        backgroundColor: colors.black,
      }}>
      <View style={styles.baseLine}></View>
      <View style={styles.customTabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.baseView}>
              <RenderTabBarIcon isFocused={isFocused} routeName={route.name} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseLine: {
    borderTopColor: colors.grey,
  },
  customTabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 20,
    alignItems: 'center',
    alignSelf: 'center',
    height: screenMatrix.height / 8,
    width: screenMatrix.width / 1,
    elevation: 5,
    zIndex: 5,
    shadowRadius: 10,
    marginBottom: -7,
    shadowColor: colors.cardBlue,
  },
  baseView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Route;
