import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {


    const [numero, setNumero] = useState('10')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar=()=>{
        setNumero('0')
    }

    const armarNumero=(numeroTexto:string)=>{

        //no aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.')return;

        if(numero.startsWith('0') || numero.startsWith('-0')){

            //punto decimal
            if(numeroTexto === '.'){
                setNumero(numero + numeroTexto)
            }
            //evaluar si es otro cero y hay un punto
            else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto)
            }
            //evaluar si es diferente de cero y no tiene un punto
            else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto)
            }
            //evitar el 0000.0
            else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero)
            }else{
                setNumero(numero + numeroTexto)
            }

        }else{
            setNumero(numero + numeroTexto)
        }

        



    }

    const masMenosFunction=()=>{
        if(numero.includes('-')){
            setNumero( numero.replace('-', '') )
        }else{
            setNumero( '-' + numero)
        }
    }


    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                {/* Boton */}
                {/* #@2D2D2D gris obscuro*/}
                {/* #FF9427 naranja */}

                <ButtonCalc text='C' color={'#9B9B9B'} action={limpiar} />
                <ButtonCalc text='+/-' color={'#9B9B9B'} action={masMenosFunction}  />
                <ButtonCalc text='del' color={'#9B9B9B'} action={limpiar} />
                <ButtonCalc text='/' color={'#FF9427'} action={limpiar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='7' action={armarNumero} />
                <ButtonCalc text='8' action={armarNumero} />
                <ButtonCalc text='9' action={armarNumero} />
                <ButtonCalc text='x' color={'#FF9427'} action={limpiar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='4' action={armarNumero} />
                <ButtonCalc text='5' action={armarNumero} />
                <ButtonCalc text='6' action={armarNumero} />
                <ButtonCalc text='-' color={'#FF9427'} action={limpiar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='1' action={armarNumero} />
                <ButtonCalc text='2' action={armarNumero} />
                <ButtonCalc text='3' action={armarNumero} />
                <ButtonCalc text='+' color={'#FF9427'} action={limpiar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='0' action={armarNumero} btnAncho={true}/>
                <ButtonCalc text='.' action={armarNumero} />
                <ButtonCalc text='=' color={'#FF9427' } action={limpiar} />
            </View>
        </View>
    )
}
