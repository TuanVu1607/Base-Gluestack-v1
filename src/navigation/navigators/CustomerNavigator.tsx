import {createStackNavigator} from '@react-navigation/stack';
import CustomerDetailScreen from '../../modules/customer/screens/customer-detail';
import AppScreenEnum from '../enums/AppScreenEnum';
import AppScreenParamList from '../types/AppScreenParamList';
import CustomerTabNavigator from './CustomerTabNavigator';

const Stack = createStackNavigator<AppScreenParamList>();

const CustomerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppScreenEnum.CUSTOMER_TAB_NAVIGATOR}
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen
        name={AppScreenEnum.CUSTOMER_TAB_NAVIGATOR}
        component={CustomerTabNavigator}
      />
      <Stack.Screen
        name={AppScreenEnum.CUSTOMER_DETAIL}
        component={CustomerDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CustomerNavigator;
