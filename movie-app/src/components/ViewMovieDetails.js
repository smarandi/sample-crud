import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Divider } from 'react-native-material-design';
import { Card } from 'react-native-elements';
import MOVIE_GENRE_LABELS from '../scripts/Enums';

@connect((store) => ({ movie: store.movie }))
class ViewMovieDetails extends Component{
  
  static propTypes = {
    dispatch: PropTypes.func,
    movie: PropTypes.object,
  };
  
  render(){
    const { movieList: list } = this.props.movie;
    const { id } = this.props.navigation.state.params;
    const [selectedMovie] = list.filter(movie => movie.id === id);
    
    return (!selectedMovie ? this.props.navigation.navigate('Splash') :
      <View>
        <Image
          source={{uri: 'http://www.free-icons-download.net/images/movie-icon-72062.png'}}
          style={{width: '100%', height: '40%', marginTop: '10%'}}
        />
        <Divider />
        <Card
          title={selectedMovie.title}
        >
          <View>
            <Text style={{marginBottom: 10, textAlign: 'center'}}>
              Genre: {MOVIE_GENRE_LABELS[selectedMovie.genre]}
            </Text>
            <Text style={{marginBottom: 10, textAlign: 'center'}}>
              Directed By: {selectedMovie.director}
            </Text>
            <Text style={{marginBottom: 10, textAlign: 'center'}}>
              {selectedMovie.favStatus ? 'This movie was favorited by you.' : '' }
            </Text>
          </View>
          <Button
            overrides={{ backgroundColor: '#009fff', textColor: '#ffffff' }}
            text="Update"
            value="NORMAL RAISED"
            raised={true}
            onPress={()=>this.props.navigation.navigate('UpdateMovieScreen', { id })}
          />
        </Card>
      </View>
    );
  }
}

export default ViewMovieDetails;
