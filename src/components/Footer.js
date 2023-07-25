import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <Text style={styles.footer}>Expociencia 1/2023, FICCT - UAGRM</Text>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    color: '#8990b4',
    textAlign: 'center'
  }
})
