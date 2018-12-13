import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '1751424098b48c1950077a9765b33a23';
export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null,
    city:null,
    humidity:null
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error:error
      });
    }
  );
  }
  _getWeather=(lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      // console.log(json.name);
      this.setState({
        temperature:json.main.temp,
        temperature_max:json.main.temp_max,
        temperature_min:json.main.temp_min,
        name:json.weather[0].main,
        city:json.name,
        humidity:json.main.humidity,
        isLoaded:true
      })
    })
  }
  
  render() {
    const {isLoaded, error, temperature, name, city, humidity} = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? 
        (
          <Weather temp={Math.floor(temperature - 273.15)} weatherName={name} cityName={city} humidity={humidity} />
        ) : (
          <View style={styles.loading} >
            <ActivityIndicator />
            <Text style={styles.loadingText} >Getting the weather....</Text>
            {error ? <Text style={styles.errorText} >{error}</Text> : null }
          </View> 
        )}
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex:1,
    backgroundColor:'#FDF6AA',
    justifyContent:"flex-end",
    paddingRight:25,
    paddingLeft:25
  },
  loadingText:{
    fontSize:38,
    marginBottom:100,
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom:40
  }
});
