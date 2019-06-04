import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderRow = () => {
  return(
    <View style={styles.headerRow}>
      <View style={styles.spacer}/>
      <Text style={styles.headerText}>SPREAD</Text>
      <Text style={styles.headerText}>MONEYLINE</Text>
      <Text style={styles.headerText}>OVER/UNDER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10
  },
  headerText: {
    width: '27%',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'roboto-regular',
  },
  spacer: {
    width: 35,
  }
});

export default HeaderRow
