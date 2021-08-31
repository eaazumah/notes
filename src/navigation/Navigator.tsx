import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Editor from '../editor/Editor';
import Splash from '../onboarding/Splash';
import {routes as r} from '../_shared/constants';
import {navigatorRef, onNavigatorReady} from '../_shared/services/navigator';

const routes = [
  {
    name: r.splash,
    component: Splash,
  },
  {
    name: r.editor,
    component: Editor,
  },
];

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigatorRef} onReady={onNavigatorReady}>
      <Stack.Navigator>
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
