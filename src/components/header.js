import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>SPORT BETS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'abel-regular',
    fontSize: 27
  }
});

export default Header
