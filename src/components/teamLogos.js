import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const TeamLogos = (props) => {
  let logos = [];
  for (var i = 0; i < props.data.length; i++) {
    logos.push(
      <View key={i} style={styles.teamLogoWrapper}>
        <Image source={props.data[i].img} style={styles.teamLogo} />
        <Text style={styles.teamLogoText}>{ props.data[i].name.toUpperCase() }</Text>
      </View>
    )
  }

  return(
    <View style={styles.logoColumn}>
      { logos }
      <View style={styles.spacer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logoColumn: {
    width: '10%',
  },
  teamLogoWrapper:{
    marginTop: 3
  },
  teamLogo: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  teamLogoText: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
  },
  spacer: {
    width: 35,
  }
});

export default TeamLogos;
