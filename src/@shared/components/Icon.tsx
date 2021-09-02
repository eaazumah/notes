import React from 'react';
import {Text} from 'react-native-svg';
import {IconType} from '../@types';
import {colors} from '../constants';
import getIconByType from '../helpers/getIconByType';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  type?: IconType;
}

const Icon: React.FC<IconProps> = props => {
  const IconByType = getIconByType(props.type);
  return (
    <React.Suspense fallback={<Text />}>
      <IconByType
        testID="icon"
        name={props.name}
        size={props.size}
        color={props.color}
      />
    </React.Suspense>
  );
};

Icon.defaultProps = {
  size: 30,
  type: 'Ionicons',
  color: colors.black,
};

export default React.memo(Icon);
