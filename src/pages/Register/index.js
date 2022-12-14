import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
export default function Register() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Registro</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <Text style={styles.title}>Email:</Text>
        <TextInput placeholder="Digite seu email..." style={styles.input} />

        <Text style={styles.title}>Senha:</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} />
        
        <Text style={styles.title}>Confirmação:</Text>
        <TextInput placeholder="Confirme sua senha..." style={styles.input} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c1ce4'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 0.5,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#8c1ce4',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  }
})
