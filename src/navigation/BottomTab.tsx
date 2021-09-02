import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../@shared/components/Icon';
import {routes as r} from '../@shared/constants';
import useTheme from '../@shared/hooks/useTheme';
import Archived from '../archived/Archived';
import Favorites from '../favorites/Favorites';
import Home from '../home/Home';

const routes = [
  {
    name: r.home,
    component: Home,
  },
  {
    name: r.favorites,
    component: Favorites,
  },
  {
    name: r.archived,
    component: Archived,
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, ...theme.tabBarOptions}}>
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: () => (
              <Icon size={12} name={'archive'} type={'EvilIcons'} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
