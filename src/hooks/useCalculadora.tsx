import { useRef, useState } from "react"

enum Operadores{
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('10')
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const ultimaOperacion = useRef<Operadores>()

    const limpiar=()=>{
        setNumero('0')
        setNumeroAnterior('0')
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

    const btnDelete = () =>{
        if(numero.length === 1){
            setNumero('0')
        }
        else if(numero.length===2 && numero.startsWith('-')){
            setNumero('0')
        }
        else{
            setNumero(numero.slice(0, -1))
        }
    }

    const masMenosFunction=()=>{
        if(numero.includes('-')){
            setNumero( numero.replace('-', '') )
        }else{
            setNumero( '-' + numero)
        }
    }

    const cambiarNumPorAnterior = () =>{
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0, -1))
        }else{
          setNumeroAnterior(numero)  
        }
        
        setNumero('0')
    }

    const btnDividir = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar
    }

    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = ( ) =>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            //falta el caso de cuando se quiere dividir entre cero
        }

        setNumeroAnterior('0')
    }

    return{
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
    }
}
