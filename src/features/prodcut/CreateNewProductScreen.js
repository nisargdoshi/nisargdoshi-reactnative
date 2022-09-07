import React, { useState,useEffect } from 'react';
import { View,Text,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';
import Button from '../../components/button';
import TextField from '../../components/textfield';
import {connect,useDispatch,useSelector} from 'react-redux';
import Style from './Style';
import colors from '../../utility/Color';
import { CREATE_CATEGORY_REQUEST,RESET_ACTION } from './actions';


import { singleButtonAlert } from '../../utility/UtilityFuncions';


const CreateNewProductScreen=({route,navigation: { goBack }})=>{

    const dispatch=useDispatch();
const categoryData = route.params;

const {message,isLoading}=useSelector(state=> state.createProduct,)

useEffect(()=>{
    console.log('me')
    if(message!=null){
        singleButtonAlert('Alert',message)
        dispatch({
            type:RESET_ACTION
        });
        if(message=='Sucess'){
            goBack();
        }
    }
},[message])

const onCreateNewProductButtonPressed=()=>{
    if(productName.length==0||productPrice==0||productDescription.length==0||productLink.length==0||selectedCategory.length==0){
        singleButtonAlert(titleToDisplay="Alert",messageToDsiplau="Please Enter all the value or select category")
    }
    else{
        dispatch({
            type:CREATE_CATEGORY_REQUEST,
            payload:{
                Name:productName,
                Price:productPrice,
                Category:selectedCategory,
                Avatar:productLink,
                Description:productDescription,
                DeveloperEmail:'nisarg.d097@gmail.com'
            }
        })

    }


}
const [productName,setProdcutName]=useState('')
const [productPrice,setProdcuPrice]=useState(0)
const [selectedCategory,setselectedCategory]=useState('')


const [productDescription,setProdcutDescription]=useState('')
const [productLink,setProdcutLink]=useState('')

const onChange=({text,lable})=>{
    if(lable=='product title'){
        setProdcutName(text)
    }
    if(lable=='Description'){
        setProdcutDescription(text)
    }
    if(lable=='Image Link'){
        setProdcutLink(text)
    }
    if(lable=='Product Price'){
        setProdcuPrice(text)
    }
}

    return (
        <View>
            <TextField testID={"123"} textToDisplay="product title" lable={"product title"} onChange={onChange} ></TextField>
            <TextField testID={"123"} keyboardType="numeric" textToDisplay="Product Price" lable={"Product Price"} onChange={onChange} ></TextField>
            <TextField testID={"1"} textToDisplay="Description" lable={"Description"} onChange={onChange} ></TextField>
            <TextField testID={"123"} textToDisplay="Image Link" lable={"Image Link"} onChange={onChange} ></TextField>
            <View style={{margin:20}}>
                    <FlatList 
                        horizontal={true}
                        data={categoryData}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={()=>{setselectedCategory(item.name)}}>
                                <View style={[Style.categoryStyle, style={backgroundColor:item.name===selectedCategory?colors.white:colors.black}]}>
                                    <Text style={{color:item.name===selectedCategory?colors.black:colors.white,fontWeight:'bold',margin:5}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>)}
                    keyExtractor={(item, index) => index}/>
    
                </View>
            {isLoading?<ActivityIndicator/>:<Button  textToDisplay={'Create'} buttonClick={onCreateNewProductButtonPressed}  />}
        </View>
    );
}
export default CreateNewProductScreen;

export const CreateProductScreenContainer=connect(null,null)(CreateNewProductScreen)