import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import CustomerListScreen from '../../modules/customer/screens/customer-list';
import CustomerMapScreen from '../../modules/customer/screens/customer-map';
import AppScreenEnum from '../enums/AppScreenEnum';
import AppScreenParamList from '../types/AppScreenParamList';

const Tab = createMaterialTopTabNavigator<AppScreenParamList>();

const CustomerTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppScreenEnum.CUSTOMER_MAP}
      screenOptions={{
        animationEnabled: true,
        swipeEnabled: false,
        tabBarActiveTintColor: '#0071BB',
        tabBarInactiveTintColor: '#C5C6C9',
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: styles.tab_indicator_style,
        tabBarLabelStyle: styles.tab_label_style,
      }}>
      <Tab.Screen
        name={AppScreenEnum.CUSTOMER_MAP}
        component={CustomerMapScreen}
        options={{
          tabBarLabel: 'Bản đồ',
        }}
      />
      <Tab.Screen
        name={AppScreenEnum.CUSTOMER_LIST}
        component={CustomerListScreen}
        options={{
          tabBarLabel: 'Danh sách',
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerTabNavigator;

const styles = StyleSheet.create({
  tab_indicator_style: {
    backgroundColor: '#0071BB',
    height: 4,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  tab_label_style: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
