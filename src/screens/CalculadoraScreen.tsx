import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {
    const {
        numeroAnterior,
        numero,
        limpiar,
        masMenosFunction,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                   <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text> 
                )
            }
            
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
                <ButtonCalc text='del' color={'#9B9B9B'} action={btnDelete} />
                <ButtonCalc text='/' color={'#FF9427'} action={btnDividir} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='7' action={armarNumero} />
                <ButtonCalc text='8' action={armarNumero} />
                <ButtonCalc text='9' action={armarNumero} />
                <ButtonCalc text='x' color={'#FF9427'} action={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='4' action={armarNumero} />
                <ButtonCalc text='5' action={armarNumero} />
                <ButtonCalc text='6' action={armarNumero} />
                <ButtonCalc text='-' color={'#FF9427'} action={btnRestar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='1' action={armarNumero} />
                <ButtonCalc text='2' action={armarNumero} />
                <ButtonCalc text='3' action={armarNumero} />
                <ButtonCalc text='+' color={'#FF9427'} action={btnSumar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='0' action={armarNumero} btnAncho={true}/>
                <ButtonCalc text='.' action={armarNumero} />
                <ButtonCalc text='=' color={'#FF9427' } action={calcular} />
            </View>
        </View>
    )
}
