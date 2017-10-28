import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-design';
import { List, ListItem } from 'react-native-elements';
import MOVIE_GENRE_LABELS from '../scripts/Enums';
import {MovieActions} from "../actions/Movie";

const sampleIcon = 'http://www.free-icons-download.net/images/movie-icon-72062.png';

@connect((store) => ({ movie: store.movie }))
class Movies extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Movies',
  };
  
  static propTypes = {
    dispatch: PropTypes.func,
    movie: PropTypes.object,
  };
  
  handleDelete = (id) => {
    const { movieList: list } = this.props.movie;
    const newMovieList = list.filter(movie => movie.id !== id);
    this.props.navigation.navigate('Splash');
    this.props.dispatch(MovieActions.updateNewMovieList(newMovieList));
  };
  
  render(){
    const { movieList: list } = this.props.movie;
    return (
      <View>
        <ScrollView style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
          {list && list.length === 0 ?
            (<Text style={styles.info}>No Movies Found</Text>) :
            list.map((movie, i) => (
              <ListItem
                roundAvatar
                avatar={sampleIcon}
                key={i}
                title={movie.title}
                subtitle={MOVIE_GENRE_LABELS[movie.genre]}
                onPress={()=>this.props.navigation.navigate('ViewMovieDetails', { id: movie.id })}
                onLongPress={() => this.handleDelete(movie.id)}
              />
            ))
          }
        </List>
        </ScrollView>
        <Button
          overrides={{ backgroundColor: '#009fff', textColor: '#ffffff' }}
          text="Add a New Movie"
          value="NORMAL RAISED"
          raised={true}
          onPress={() => this.props.navigation.navigate('AddMovieScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
  },
  item: {
    display: 'inline',
    padding: 0,
    fontSize: 18,
    height: 44,
  },
  info: {
    padding: 20,
    textAlign: 'center',
  }
});

export default Movies;
