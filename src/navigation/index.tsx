import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import HomeNavigator from './navigators/HomeNavigator';

const AppNavigation = () => {
  const navigationContainerRef =
    React.useRef<NavigationContainerRef<any>>(null);

  React.useEffect(() => {
    async function init() {
      console.log('App Initialized');
    }
    init();
  }, []);

  const handleNavigationStateChange = async () => {
    const currentRoute = navigationContainerRef.current?.getCurrentRoute();
    try {
      console.log(`Screen: ${currentRoute}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      onStateChange={handleNavigationStateChange}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
