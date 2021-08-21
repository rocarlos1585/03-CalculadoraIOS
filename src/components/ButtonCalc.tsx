import React from 'react'
import { View, Text, StyleSheet, TouchableOpacityBase, TouchableOpacity } from 'react-native';

interface PropsButton{
    text:string,
    color?:string,
    btnAncho?:boolean
}

export const ButtonCalc = ({text, color='#2D2D2D', btnAncho=false}:PropsButton) => {
    return (
        <TouchableOpacity >
            <View style={{
                    ...styles.boton,
                    backgroundColor:color,
                    width:(btnAncho)?180:80
                }}>
                <Text style={{...styles.botonTexto, 
                    color: (color==='#9B9B9B')?'black':'white' 
                    }}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    boton:{
        height:80,
        width:80,

        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    },

    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'300'
    }, 
})
