import {ImageSourcePropType} from 'react-native';

export interface OnBoardingItem {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export interface OnBoardingItemProps {
  item: OnBoardingItem;
}
