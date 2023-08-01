import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const Favorites= () => {
    return(
        <View style ={styles.container}>
            <Text> Favorites</Text>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            fontWeight: 'bold',
            backgroundColor: '#ffff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    export default Favorites;
    