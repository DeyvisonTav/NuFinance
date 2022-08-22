import React from 'react'
import { useState } from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MotiView, AnimatePresence, MotiText } from 'moti'
export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false)
  return (
    <TouchableOpacity style={styles.opacy} onPress={()=> setShowValue(!showValue)}>
      <Text style={styles.dates}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
          <MotiText 
          from={{translateX:100}} animate={{translateX:0}} transition={{type:'timing',duration:500}}
          style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1 ? `R$${data.value} ` : `-R$ ${data.value}   `}
          </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
          <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{type:'timing'}} style={styles.skeleton}></MotiView>
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  opacy: {
    flex: 1,
    width: 368,

    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  dates: {
    color: 'gray',
    fontWeight: 'bold'
  },
  content: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 2
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    marginRight: 5,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 8
  }
})
