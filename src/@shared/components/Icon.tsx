import React, {Suspense} from 'react';
import {Text} from 'react-native-svg';
import {IconType} from '../@types';
import {colors} from '../constants';
import getIconByType from '../helpers/getIconByType';

interface Props {
  name: string;
  size: number;
  color: string;
  type: IconType;
}

const Icon = (props: Props) => {
  const IconByType = getIconByType(props.type);
  return (
    <Suspense fallback={<Text />}>
      <IconByType name={props.name} size={props.size} color={props.color} />
    </Suspense>
  );
};

Icon.defaultProps = {
  size: 30,
  type: 'Ionicons',
  color: colors.black,
};

export default React.memo(Icon);
