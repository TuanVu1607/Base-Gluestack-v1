import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  IconAccountTabBold,
  IconAccountTabLine,
  IconCustomerTabBold,
  IconCustomerTabLine,
} from '../../components/icons';
import {BaseTabIcon} from '../../components/tabs/tab-icon';
import {BaseTabLabel} from '../../components/tabs/tab-label';
import {handleTabNotifyCount} from '../../utils/AppUtils';
import AppScreenEnum from '../enums/AppScreenEnum';
import AppScreenParamList from '../types/AppScreenParamList';
import CustomerNavigator from './CustomerNavigator';
import SettingNavigator from './SettingNavigator';

const Tab = createBottomTabNavigator<AppScreenParamList>();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppScreenEnum.CUSTOMER_NAVIGATOR}
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        lazy: true,
        tabBarActiveTintColor: '#0071BB',
        tabBarInactiveTintColor: '#C5C6C9',
        tabBarStyle: styles.tabContainer,
        tabBarItemStyle: styles.tabItem,
        tabBarLabel: ({focused, color, position, children}) =>
          handleTabBarLabel(route, color, position),
        tabBarIcon: ({focused, color, size}) =>
          handleTabBarIcon(route, focused, color, size),
        tabBarBadge: handleTabBarBadge(route),
      })}>
      <Tab.Screen
        name={AppScreenEnum.CUSTOMER_NAVIGATOR}
        component={CustomerNavigator}
      />
      <Tab.Screen
        name={AppScreenEnum.SETTING_NAVIGATOR}
        component={SettingNavigator}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    height: 60,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    borderTopWidth: 0,
    elevation: 10,
  },
  tabItem: {
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

const handleTabBarLabel = (
  route: RouteProp<AppScreenParamList, keyof AppScreenParamList>,
  color: string,
  position: string,
) => {
  let label = 'Customer';
  switch (route.name) {
    case AppScreenEnum.SETTING_NAVIGATOR:
      label = 'Setting';
      break;
    default:
      break;
  }

  return (
    <BaseTabLabel
      label={label}
      color={color}
      fontSize={10}
      position={position}
    />
  );
};

const handleTabBarIcon = (
  route: RouteProp<AppScreenParamList, keyof AppScreenParamList>,
  focused: boolean,
  color: string,
  size: number,
) => {
  let IconActive = IconCustomerTabBold;
  let IconInactive = IconCustomerTabLine;

  switch (route.name) {
    case AppScreenEnum.SETTING_NAVIGATOR:
      IconActive = IconAccountTabBold;
      IconInactive = IconAccountTabLine;
      break;
    default:
      break;
  }
  return (
    <BaseTabIcon
      focused={focused}
      iconColor={color}
      iconSize={size}
      IconActive={IconActive}
      IconInactive={IconInactive}
      keyItem={route.key}
    />
  );
};

const handleTabBarBadge = (
  route: RouteProp<AppScreenParamList, keyof AppScreenParamList>,
) => {
  const simulateCountCustomer = 100;
  const simulateCountSetting = 50;
  switch (route.name) {
    case AppScreenEnum.SETTING_NAVIGATOR:
      return handleTabNotifyCount(simulateCountSetting);
    default:
      return handleTabNotifyCount(simulateCountCustomer);
  }
};
