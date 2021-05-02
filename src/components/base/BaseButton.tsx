import React from "react";
import { StyleSheet } from "react-native";
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps, ViewProps, ViewStyle } from "./Themed";
import { GetTranslation, TranslationKey } from "../../utils/TranslateHelper";
import ConstantColors from "../../constants/ConstantColors";
import { BaseLabelProps } from "./BaseLabel";

const BUTTON_HEIGHT = 48

type BaseButtonProps = {
    label?: string,
    onPress: () => void
    style?: TouchableOpacityProps['style'],
    textStyle?: TextProps['style'],
    buttonProps?: TouchableOpacityProps,
    leftIcon?: any,
    rightIcon?: any,
    disabled?: boolean,
    labelProps?: BaseLabelProps
}

const BaseButton = (props: BaseButtonProps) => {

    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} {...props.buttonProps} style={[styles.style, { opacity: props.buttonProps?.disabled ? 0.5 : 1 }, props.style]} >

            {props.leftIcon && props.leftIcon}

            <Text style={[styles.textStyle, props.textStyle]} ellipsizeMode={'tail'} numberOfLines={2} {...props.labelProps} >{props.label || GetTranslation(TranslationKey.Button.Continue)}</Text>

            {props.rightIcon && props.rightIcon}

        </TouchableOpacity>
    );
}
export default BaseButton;

const styles = StyleSheet.create({
    style: {
        backgroundColor: ConstantColors.Button,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        paddingHorizontal: 16,
        height: BUTTON_HEIGHT,
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    }
})
