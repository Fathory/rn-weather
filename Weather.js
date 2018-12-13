import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title:"Raining!",
        subtitle: "For more Info, Look outside!",
        icon:'weather-pouring'
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title:"Sunny!",
        subtitle: "Go out! ",
        icon:'weather-sunny'
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title:"Thunderstorm!",
        subtitle: "Don't go out!",
        icon:'weather-lightning-rainy'
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title:"Clouds...",
        subtitle: "boring.. by clouds...",
        icon:'weather-cloudy'
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title:"Let's make Snowman!",
        subtitle: "clear white world! but... traffic....",
        icon:'weather-snowy'
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"], 
        title:"Drizzle!",
        subtitle: "Sooooooooooo bad weather.",
        icon:'weather-rainy'
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"], 
        title:"Haze!",
        subtitle: "I Can't See landscape.",
        icon:'weather-hail'
    },
    Mist:{
        colors:["#636B60", "#CCCCCB"], 
        title:"Mist!",
        subtitle: "I Can't See landscape.",
        icon:'weather-fog'
    }
}

let di =function(temp, humidity){
    return Math.floor(9/5*temp - 0.55 * (1-(humidity/100))*(9/5*temp - 26) + 32);
}
function Weather({ weatherName, temp, cityName, humidity }){
    console.log(cityName);
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
                <Text style={styles.cityName}> {cityName} </Text>
                <Text style={styles.humidity}> 습도 {humidity} </Text>
                <Text style={styles.status }> 불쾌지수 {di(temp, humidity)} </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title} > {weatherCases[weatherName].title} </Text>
                <Text style={styles.subtitle} >{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName:PropTypes.string.isRequired
}


export default Weather;

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent",
    },
    temp:{
        fontSize:48,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:10
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25
    },
    title:{
        fontSize:38,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:10,
        fontWeight:"300"
    },
    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24
    },
    cityName:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24
    },
    humidity:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24
    },
    status:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24
    }
})
