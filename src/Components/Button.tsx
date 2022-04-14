import React from 'react';
import { Text, TouchableOpacity,TouchableOpacityProps, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button ({ ...rest } : ButtonProps){
    return (
        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        {... rest}
    >
        <Text style={styles.buttonText}
        >Add</Text>
    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
       // paddingHorizontal: 30

    },
   
    button: {
        backgroundColor: "#A370f7",
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: 'bold',
    }

});