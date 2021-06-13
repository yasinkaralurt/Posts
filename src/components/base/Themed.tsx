import * as React from 'react';
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  TouchableOpacity as DefaultTouchableOpacity,
  FlatList as DefaultFlatList,
  Switch as DefaultSwitch,
  useColorScheme,
} from 'react-native';

import ConstantColors from "../../utils/constants/ConstantColors";

import FontFamily from '../../utils/constants/FontFamily';

const ThemeColors={
  light: {
    text: ConstantColors.Text,
    background: 'transparent',
  },
  dark: {
    text: ConstantColors.Text,
    background: '#000',
  },
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ThemeColors.light & keyof typeof ThemeColors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return ThemeColors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewStyle = ThemeProps & DefaultView['props']['style'];

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];
export type SwitchProps = ThemeProps & DefaultSwitch['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  var fontFamily = getFont(props)

  return <DefaultText style={[{ color, fontSize: 12, fontFamily }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  var fontFamily = getFont(props)

  return <DefaultTextInput placeholderTextColor={ConstantColors.Gray} style={[{ color, fontSize: 12, fontFamily }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function FlatList(props: FlatListProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultFlatList style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Switch(props: SwitchProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultSwitch style={[{ backgroundColor }, style]} {...otherProps} />;
}



const getFont = (props: TextProps) => {

  var style: any = {}
  if (Array.isArray(props.style))
    props.style.map((item: any) => style = { ...style, ...item })
  else
    style = props.style || {}

  const { fontStyle, fontWeight } = style;
  var fontFamily = FontFamily.PoppinsRegular

  if (fontStyle == 'italic')
    switch (fontWeight) {
      case '100':
        fontFamily = FontFamily.PoppinsThinItalic
        break;
      case '200':
        fontFamily = FontFamily.PoppinsExtraLightItalic
        break;
      case '300':
        fontFamily = FontFamily.PoppinsLightItalic
        break;
      case 'normal':
      case '400':
        fontFamily = FontFamily.PoppinsItalic
        break;
      case '500':
        fontFamily = FontFamily.PoppinsMediumItalic
        break;
      case '600':
        fontFamily = FontFamily.PoppinsSemiBoldItalic
        break;
      case 'bold':
      case '700':
        fontFamily = FontFamily.PoppinsBoldItalic
        break;
      case '800':
        fontFamily = FontFamily.PoppinsExtraBoldItalic
        break;
      case '900':
        fontFamily = FontFamily.PoppinsBlackItalic
        break;
      default:
        fontFamily = FontFamily.PoppinsItalic
        break;
    }
  else
    switch (fontWeight) {
      case '100':
        fontFamily = FontFamily.PoppinsThin
        break;
      case '200':
        fontFamily = FontFamily.PoppinsExtraLight
        break;
      case '300':
        fontFamily = FontFamily.PoppinsLight
        break;
      case 'normal':
      case '400':
        fontFamily = FontFamily.PoppinsRegular
        break;
      case '500':
        fontFamily = FontFamily.PoppinsMedium
        break;
      case '600':
        fontFamily = FontFamily.PoppinsSemiBold
        break;
      case 'bold':
      case '700':
        fontFamily = FontFamily.PoppinsBold
        break;
      case '800':
        fontFamily = FontFamily.PoppinsExtraBold
        break;
      case '900':
        fontFamily = FontFamily.PoppinsBlack
        break;
      default:
        fontFamily = FontFamily.PoppinsRegular
        break;
    }
  return fontFamily
}