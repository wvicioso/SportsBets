import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo'
import Stars from './stars.js';
import Card from './card.js';
import TeamLogos from './teamLogos.js';
import HeaderRow from './headerRow.js';

import { formatDate } from '../utils/dateParser.js'

const TeamLogoPNG = {
  bos: require('../../assets/teams/bos.png'),
  gs: require('../../assets/teams/gs.png'),
  hou: require('../../assets/teams/hou.png'),
  mil: require('../../assets/teams/mil.png')
}

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.game
    }
  }

  render() {
    let { start_time, team_away, team_home, spread, moneyline, over_under } = this.state,
        awayTeamLogo = TeamLogoPNG[team_away],
        homeTeamLogo = TeamLogoPNG[team_home];

    let teamLogos = [{img: awayTeamLogo, name: team_away}, {img: homeTeamLogo, name: team_home}],
        date = formatDate(start_time);

    return (
      <View style={styles.container}>
        <Text style={styles.dateText}>{date}</Text>
        <HeaderRow />
        <View style={styles.body}>
          <TeamLogos data={teamLogos}/>
          {
            [spread, moneyline].map((itm, idx) => {
              return (<Card
                        key={idx}
                        top={(itm.away > 0 ? '+' : '' ) + itm.away}
                        mid={(itm.home > 0 ? '+' : '' ) + itm.home}
                        bot={<Stars stars={itm.rating}/>}
                        pick={itm.rating > 0 ? itm.pick : null}
                        pickTop={itm.pick === 'a' ? true : false}
                      />)
            })
          }
          <Card
            top={'u ' + over_under.line}
            mid={'o ' + over_under.line}
            bot={<Stars stars={ over_under.rating }/>}
            pick={over_under.rating > 0 ? over_under.pick : null}
            pickTop={over_under.pick === 'o' ? true : false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderBottomWidth: .5,
    borderColor: '#D9D9D9',
    padding: 15
  },
  dateText: {
    fontSize: 21,
    paddingBottom: 15
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FBFCFF',
    padding: 10,
  }
});
