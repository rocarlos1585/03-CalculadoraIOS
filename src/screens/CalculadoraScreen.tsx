import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            <View style={styles.fila}>
                {/* Boton */}
                {/* #@2D2D2D gris obscuro*/}
                {/* #FF9427 naranja */}

                <ButtonCalc text='C' color={'#9B9B9B'} />
                <ButtonCalc text='+/-' color={'#9B9B9B'} />
                <ButtonCalc text='del' color={'#9B9B9B'} />
                <ButtonCalc text='/' color={'#FF9427'}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='7' />
                <ButtonCalc text='8' />
                <ButtonCalc text='9' />
                <ButtonCalc text='x' color={'#FF9427'}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='4' />
                <ButtonCalc text='5' />
                <ButtonCalc text='6' />
                <ButtonCalc text='-' color={'#FF9427'}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='1' />
                <ButtonCalc text='2' />
                <ButtonCalc text='3' />
                <ButtonCalc text='+' color={'#FF9427'}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text='0' btnAncho={true}/>
                <ButtonCalc text='.' />
                <ButtonCalc text='=' color={'#FF9427'}/>
            </View>
        </View>
    )
}
