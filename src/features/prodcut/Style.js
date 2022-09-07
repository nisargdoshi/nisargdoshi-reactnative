import {StyleSheet } from 'react-native';
import colors from '../../utility/Color';


export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    listContainer:{ flex: 1,flexDirection: 'column',height:300,backgroundColor:colors.white,margin: 5,shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 10, overflow: 'hidden'
    },
    categoryStyle:{height:40,margin:5,padding:2,borderColor:'#000',  borderWidth:1,  borderRadius: 10, overflow: 'hidden'},
    productTextStyle:{color:colors.white,fontWeight:'bold',margin:5},
                
  });