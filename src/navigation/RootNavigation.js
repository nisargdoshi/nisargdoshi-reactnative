import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();


export function getCurrentRouteName() {

  return navigationRef?.current?.getCurrentRoute()?.name
}
export function navigate(name, params) {
 
   navigationRef?.current?.navigate(name, params);

  //return navigationRef?.current?.getCurrentRoute()?.name
}