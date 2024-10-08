import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppScreenEnum from '../enums/AppScreenEnum';
import AppScreenParamList from './AppScreenParamList';

type AppScreenProps<T extends AppScreenEnum> = {
  navigation: StackNavigationProp<AppScreenParamList, T>;
  route: RouteProp<AppScreenParamList, T>;
};

export default AppScreenProps;
