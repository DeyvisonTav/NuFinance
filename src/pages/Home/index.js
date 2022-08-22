import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'boleto conta de luz',
    value: '300,90',
    date: '17/08/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'PIX cliente',
    value: '2.500,00',
    date: '10/08/2022',
    type: 1 // receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '4.500,00',
    date: '01/08/2022',
    type: 1 // receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="NuFinance" />
      <Balance saldo="15.000,00" gastos="390,00" />
      <Actions/>
      <Text style={styles.title}> Últimas Movimentações</Text>
      <FlatList
        style={styles.flatList}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Text>
            <Movements data={item} />
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    marginBottom: 14,
  },
  flatList: {
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    marginBottom: 14
  }
})
