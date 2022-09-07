import { StyleSheet } from 'react-native';
import colors from '../../utility/Color'

export default StyleSheet.create({
    touchableOpacityStyle: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical:15,
  },
  textStyle: {
      fontSize:14,
      color:colors.white,
  },
  container: {
      alignSelf: 'center',
      marginTop:30,
      backgroundColor:colors.black,
      width:'100%',
      borderRadius:4,
    },
  });