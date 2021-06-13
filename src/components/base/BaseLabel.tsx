import * as React from 'react';
import ConstantColors from '../../utils/constants/ConstantColors';
import ConstantStyles from '../../utils/constants/ConstantStyles';

import { Text, TextProps } from './Themed';

export type BaseLabelBaseProps = {
  label?: string | null,
  required?: boolean,
  showRequired?: boolean, // only works if required is true
  error?: boolean
}

export type BaseLabelProps = BaseLabelBaseProps & TextProps

export function BaseLabel(props: BaseLabelProps) {

  const getErrorColor = () => {
    if (props.error)
      return { color: ConstantColors.Error }
  }

  const getLabel = () => {
    if (props.required && props.showRequired)
      return props.label + "(*)"
    return props.label
  }

  if (!props.label)
    return null

  return <Text {...props} style={[ConstantStyles.Label, props.style, getErrorColor()]}>{getLabel()}</Text>

}