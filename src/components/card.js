import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = (props) => {
  let topBackground = '#D4D6EE';
  let midBackground = '#D4D6EE';
  if (props.pick) {
    if (props.pickTop) {
      topBackground = '#00EC6C';
    } else {
      midBackground = '#00EC6C';
    }
  }

  return(
    <View style={styles.dataColumn}>
      <View style={[styles.dataTextWrapper, {backgroundColor: topBackground}]}>
        <Text style={[styles.dataText, {color: props.pick ? '#FFF' : '#000'}]}>
        { props.top }
        </Text>
      </View>
      <View style={[styles.dataTextWrapper, {backgroundColor: midBackground}]}>
        <Text style={[styles.dataText, {color: props.pick ? '#FFF' : '#000'}]}>
        { props.mid }
        </Text>
      </View>
      { props.bot }
    </View>
  )
}

const styles = StyleSheet.create({
  dataColumn: {
    width: '27%',
    backgroundColor: '#F0F3FC',
    padding: 5
  },
  dataTextWrapper: {
    width: '100%',
    height: 50,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataText: {
    textAlign: 'center',
    fontFamily: 'roboto-regular'
  }
});

export default Card;
