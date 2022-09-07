import React, { useState,useEffect } from 'react';
import colors from '../../utility/Color';
import { View,Text,FlatList,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import {connect,useDispatch,useSelector} from 'react-redux';
import { GET_PRODUCT_LIST_REQUEST,GET_CATEGORY_LIST_REQUEST } from './actions';
import NavigationHeaders from '../../navigation/NavigationHeaders';
import { FAB, Icon } from 'react-native-elements';


import Style from '../prodcut/Style';

const ProductListScreen=({navigation})=>{

   const [productData,setProductData]=useState([])
   const [categoryData,setCategoryData]=useState([])
   const [selectedCategory,setselectedCategory]=useState('')

   const dispatch=useDispatch();

   const productList=useSelector((state)=>state.product.productList);
   const categoryList=useSelector((state)=>state.product.categoryList);
  
  function filterData(name){
    setselectedCategory(name)
    setProductData(productList.filter((item)=>item.category===name))
  }

    useEffect(()=>{
        dispatch({
            type:GET_PRODUCT_LIST_REQUEST
        })
        dispatch({
            type:GET_CATEGORY_LIST_REQUEST
        })
    },[])


    useEffect(()=>{
        setProductData(productList)
    },[productList])


    useEffect(()=>{
        setCategoryData(categoryList)
    },[categoryList])
    // const productList=useSelector((state)=>state.)


    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.container}>
                <View style={{margin:20}}>
                    <FlatList 
                        horizontal={true}
                        data={categoryData}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={()=>{filterData(item.name)}}>
                                <View style={[Style.categoryStyle, style={backgroundColor:item.name===selectedCategory?colors.white:colors.black}]}>
                                    <Text style={{color:item.name===selectedCategory?colors.black:colors.white,fontWeight:'bold',margin:5}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>)}
                    keyExtractor={(item, index) => index}/>
    
                </View>
           {
            productData.length==0? <View style={Style.listContainer}>                    
            <Text>No data to Display </Text></View>
            :
            <FlatList
                data={productData}
                renderItem={({item}) => (
                    <View style={Style.listContainer}>                    
                        <TouchableOpacity onPress={()=>{navigation.navigate({name: NavigationHeaders.ProductDetailsScreen,params:item})}}>
                            <Image  style={{ height: 250,}} source={{uri: item.avatar}}/>
                            <View style={{ backgroundColor: colors.black,height:50}}>
                                <Text style={Style.productTextStyle}>{item.name}</Text>
                                <Text style={Style.productTextStyle}>{item.price}</Text>
                            </View>

                      </TouchableOpacity>
                  </View>
                )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />}
        <FAB onPress={()=>navigation.navigate({name:NavigationHeaders.CreateNewProductScreen,params:categoryData})} title={"+"} size='large' overlayColor="#ffF" color={colors.black} style={{justifyContent:'flex-end',margin:10}}/>
        </View>
        </SafeAreaView>
    );
}

export default ProductListScreen;

export const ProductDetailScreenContainer=connect(null,null)(ProductListScreen)