import React, { useEffect } from 'react';
import Images from '../../utility/Images';


import { View,Image } from 'react-native';
import Styles from './Style.js'



const SplashScreen=({navigation})=>{


useEffect(() => {

    const timer = setTimeout(() => {
    
        navigation.replace('ProductListScreen')
      }, 1000);
      return () => clearTimeout(timer);

},[]);


    return (
        <View style={Styles.container} >
            <Image source={Images.splashScreen.background}  resizeMode='cover'/>
        </View>
    );
}

export default SplashScreen;