import React from 'react';
import {IconType} from '../@types';

const getIconByType = (type?: IconType) => {
  switch (type) {
    case 'MaterialIcons':
      return React.lazy(
        () => import(`react-native-vector-icons/MaterialIcons`),
      );
    case 'SimpleLineIcons':
      return React.lazy(
        () => import(`react-native-vector-icons/SimpleLineIcons`),
      );
    case 'MaterialCommunityIcons':
      return React.lazy(
        () => import(`react-native-vector-icons/MaterialCommunityIcons`),
      );
    case 'Zocial':
      return React.lazy(() => import(`react-native-vector-icons/Zocial`));
    case 'Entypo':
      return React.lazy(() => import(`react-native-vector-icons/Entypo`));
    case 'Feather':
      return React.lazy(() => import(`react-native-vector-icons/Feather`));
    case 'Octicons':
      return React.lazy(() => import(`react-native-vector-icons/Octicons`));
    case 'Ionicons':
      return React.lazy(() => import(`react-native-vector-icons/Ionicons`));
    case 'AntDesign':
      return React.lazy(() => import(`react-native-vector-icons/AntDesign`));
    case 'EvilIcons':
      return React.lazy(() => import(`react-native-vector-icons/EvilIcons`));
    case 'Foundation':
      return React.lazy(() => import(`react-native-vector-icons/Foundation`));
    case 'FontAwesome':
      return React.lazy(() => import(`react-native-vector-icons/FontAwesome`));
    case 'FontAwesome5':
      return React.lazy(() => import(`react-native-vector-icons/FontAwesome5`));
    default:
      return React.lazy(() => import(`react-native-vector-icons/Ionicons`));
  }
};

export default getIconByType;
