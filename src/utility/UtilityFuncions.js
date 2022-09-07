import { Alert } from 'react-native'
import Strings from '../utility/String'


export const singleButtonAlert = (titleToDisplay = '', messageToDisplay = '') =>
  Alert.alert(
    titleToDisplay,
    messageToDisplay,
    [
      { text: Strings.ok, onPress: () => { } }
    ],
    { cancelable: false }
  );
