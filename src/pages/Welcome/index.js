import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={200}
          animation="flipInX"
          source={require('../../assets/nupng.png')}
          style={{ width: '70%', height: '60%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={700}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfd'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#fcfcfd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopColor: '#bc8ae1',
    borderLeftColor: '#bc8ae1',
    borderRightColor: '#bc8ae1',
    borderTopWidth: 0.9,
    borderRightWidth: 0.7,
    borderLeftWidth: 0.7,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#8c1ce4'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#8c1ce4',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
