import React, { useImperativeHandle, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import ConstantColors from '../../utils/constants/ConstantColors';

export type HudRefType = {
  show: () => void;
  hide: () => void;
};

const Hud = React.forwardRef(({ }, ref?: React.Ref<HudRefType>) => {

  const [show, setShow] = useState(false)

  function showHud() {
    setShow(true)
  }

  function hideHud() {
    setShow(false)
  }

  useImperativeHandle(ref, () => ({
    show: () => showHud(),
    hide: () => hideHud(),
  }));

  useBackHandler(() => {
    return show;
  });

  return show
    ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={ConstantColors.Primary} style={{ marginTop: 50 }} />
      </View>
    )
    : null;
});

export default Hud;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
