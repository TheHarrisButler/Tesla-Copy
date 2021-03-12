import React from 'react'; 
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles.js';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={require('../../assets/ModelS.jpeg')}
          style={styles.image}
        />
        <View style={styles.titels}>
          <Text  style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,000</Text>
        </View>


      </View>
    )
}

export default CarItem;  