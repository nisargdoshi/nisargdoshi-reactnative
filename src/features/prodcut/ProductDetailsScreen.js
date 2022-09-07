import React, { useState,useEffect } from 'react';
import Style from './Style';

import { View,Text,FlatList,Image,SafeAreaView,TouchableOpacity } from 'react-native';


const ProductDetailsScreen=({route,navigation})=>{

    const product = route.params;
    navigation.setOptions({title: product.name})

    return(
        <SafeAreaView style={Style.container}>
            <View style={Style.container}>

                <Image  style={{ height: 400,}} source={{uri: product.avatar}}/>
                <View>

                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:22,margin:10}}>{'Price:'+product.price}</Text>

                </View>
                <Text style={{alignSelf:'center'}}>{product.description}</Text>
            </View>
       </SafeAreaView>
    );
}
export default ProductDetailsScreen;
