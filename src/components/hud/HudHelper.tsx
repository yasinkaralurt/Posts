import React from 'react';
import {HudRefType} from '.';

export const hudRef = React.createRef<HudRefType>();

export const showHud = () => {
  hudRef.current?.show();
};

export const hideHud = () => {
  hudRef.current?.hide();
};
