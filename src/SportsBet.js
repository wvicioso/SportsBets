import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Font } from 'expo';
import Header from './components/header.js';
import GameCard from './components/gameCard.js';

export default class SportsBet extends React.Component {

  constructor() {
    super();
    this.state = {
      games: [],
      fontLoaded: false
    }
  }

  componentDidMount() {
    this.loadFonts();
    this.getGames();
  }

  async loadFonts() {
    await Font.loadAsync({
      'abel-regular': require('../assets/fonts/Abel-Regular.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  getGames() {
    /* make api call to get games */
    let responseJSON = require('../api.json');
     this.setState({
       games: responseJSON.games
     })
  }

  renderGameCards() {
    let gameCardsArr = this.state.games.map((game, idx) => {
      return <GameCard key={idx} game={game} />
    })
    return gameCardsArr;
  }

  render() {
    let games = this.renderGameCards();

    return !this.state.fontLoaded ? <View/> : (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <Header/>
        { games }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F0F2FC',
    marginTop: '10%'
  },
  scrollContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
