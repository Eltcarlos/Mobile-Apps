import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {
  const [numeroAnteior, setNumeroAnteior] = useState(0);
  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal

      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        // Evaluar si es otro
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        // evaluar si es diferente de 0 y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        // evitar el 000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}> {numeroAnteior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {' '}
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="/" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" action={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" action={armarNumero} ancho />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" action={limpiar} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
