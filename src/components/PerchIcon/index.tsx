import React from 'react';

import * as IconList from 'iconsax-react-native';

interface Props extends IconList.IconProps {
  name: string;
  variant?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone';
}

const PerchIcon = ({
  name,
  size,
  color = 'red',
  variant = 'Outline',
  ...rest
}: Props) => {
  const Icon = IconList[name] ? IconList[name] : IconList.MessageQuestion;
  return <Icon color={color} size={size} variant={variant} {...rest} />;
};

export default PerchIcon;
