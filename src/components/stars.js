import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Stars = (props) => {
  let starsArr = [];
  if (props.stars != 0) {
    for (var i = 0; i < 5; i++) {
      starsArr.push(
        <Image
          key={i}
          source={i < props.stars ?  require('../../assets/star-solid.png') : require('../../assets/star-regular.png')}
          style={styles.star}
        />
      )
    }
  }
  return(
    <View style={styles.starsWrapper}>
      { starsArr }
    </View>
  )
}

const styles = StyleSheet.create({
  starsWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
  star: {
    width: 15,
    height: 15,
  }
});

export default Stars;
