import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import AdvanceProfileScreen from '../../modules/setting/screens/advance-profile';
import ProfileScreen from '../../modules/setting/screens/profile';
import AppScreenEnum from '../enums/AppScreenEnum';
import AppScreenParamList from '../types/AppScreenParamList';

const Stack = createStackNavigator<AppScreenParamList>();

const options: StackNavigationOptions = {
  animationEnabled: true,
  headerShown: false,
};

const SettingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppScreenEnum.SETTING_NAVIGATOR}
      screenOptions={options}>
      <Stack.Screen name={AppScreenEnum.PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={AppScreenEnum.ADVANCE_PROFILE}
        component={AdvanceProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
