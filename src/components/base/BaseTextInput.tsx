import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, View, TextInputProps, TextProps, ViewProps, Text } from "./Themed";
import ConstantColors from "../../utils/constants/ConstantColors";
import ConstantStyles from "../../utils/constants/ConstantStyles";
import { BaseLabel, BaseLabelProps } from "./BaseLabel";

type InputType = {
  label?: string,
  containerStyle?: ViewProps['style'],
  subContainerStyle?: ViewProps['style'],
  labelStyle?: TextProps['style'],
  error?: boolean,
  required?: boolean,
  labelProps?: BaseLabelProps
}

const BaseTextInput = (props: InputType & TextInputProps) => {

  const [isValid, setIsValid] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const changeTextHandler = (text: string) => {
    if (props.onChangeText)
      props.onChangeText(text);
  }

  useEffect(() => {
    if (props.error)
      setIsValid(false)
    else if (!props.required || props.value)
      setIsValid(true)
  }, [props.value, props.required, props.error])


  const blurHandler = () => {
    if (props.required && !props.value)
      setIsValid(false);
    setIsFocus(false);
  }

  const focusHandler = () => {
    setIsFocus(true);
  }

  const renderContentStyle = () => {
    var style = [styles.containerStyle, props.containerStyle];
    if (isFocus)
      style = [...style, ConstantStyles.FocusedBorder];
    if (!isValid)
      style = [...style, ConstantStyles.ErrorBorder];
    return style;
  }

  const renderLabelStyle = () => {
    var style = [ConstantStyles.Label, props.labelStyle];
    if (!isValid)
      style = [...style, { color: ConstantColors.Error }];
    return style;
  }

  return (
      <View style={renderContentStyle()}>
        <View style={[{ flex: 1, overflow: 'hidden' }, props.subContainerStyle]}>
          {/* <BaseLabel label={props.label} error={!isValid} required={props.required} style={renderLabelStyle()}  {...props.labelProps} /> */}
          <TextInput
            {...props}
            placeholder={(props.label || '') + (props.required ? '*' : '')}
            placeholderTextColor={props.placeholderTextColor || ConstantColors.PlaceHolder}
            onFocus={focusHandler}
            onBlur={blurHandler}
            style={[styles.style, props.editable !== false ? {} : { color: ConstantColors.Passive }, props.style]}
            editable={props.editable !== false}
            multiline={props.multiline !== false}
            onChangeText={changeTextHandler}
          />
        </View>
      </View>
  );
}
export default BaseTextInput;

const styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 4,
    marginBottom: 6,
    backgroundColor: ConstantColors.Secondary,
    ...ConstantStyles.DefaultBorder
  },
  style: {
    ...ConstantStyles.Value,
    paddingVertical: 5,
    paddingHorizontal: 24,
    minHeight: 48,
  },
})
