import { Platform, StatusBar, Dimensions } from 'react-native';

export const statusHeight = StatusBar.currentHeight;
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);
export const deviceWidth = Dimensions.get("screen");