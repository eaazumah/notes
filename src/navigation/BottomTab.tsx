import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {IconType} from '../@shared/@types';
import Icon from '../@shared/components/Icon';
import {colors, routes as r} from '../@shared/constants';
import useTheme from '../@shared/hooks/useTheme';
import Archived from '../archived/Archived';
import Favorites from '../favorites/Favorites';
import Home from '../home/Home';

const routes = [
  {
    name: r.home,
    component: Home,
    icon: {
      name: 'notes',
      type: 'MaterialIcons' as IconType,
    },
  },
  {
    name: r.favorites,
    component: Favorites,
    icon: {
      name: 'bookmark-outline',
      type: 'MaterialCommunityIcons' as IconType,
    },
  },
  {
    name: r.archived,
    component: Archived,
    icon: {
      size: 33,
      name: 'archive',
      type: 'EvilIcons' as IconType,
    },
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        ...theme.tabBarOptions,
        tabBarShowLabel: false,
      }}>
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                size={30}
                {...route.icon}
                color={focused ? colors.primary : colors.grey}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
