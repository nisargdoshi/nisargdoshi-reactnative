
import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';

import styles from './Style'
import colors from '../../utility/Color'



const Button = ({ textToDisplay, buttonClick }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={buttonClick} style={styles.touchableOpacityStyle}>
                <Text style={styles.textStyle}>{textToDisplay}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default React.memo(Button)