import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

  const Home = () =>{
      return(
        <SafeAreaView>
            <ScrollView>
                <View style = {style.navbar_container}>
                    <View style={style.navbar_containers}>
                        <Text>English</Text>

                    </View>
                    <View style = {style.navbar_containers} >
                    <Text onPress={()=>{console.log('Home screen will be triggered')}}>Covid19India</Text>
                    </View>
                    <View style = {style.navbar_containers}>
                    <Icon name='bars' size={20}/>
                    </View>
                </View>
            </ScrollView>    
         

      </SafeAreaView>
      )
  }

  const style = StyleSheet.create({
      container : {
          height : 100,
          width : '80%',
          backgroundColor : '#858484'
      },
      navbar_container : {
          flex : 1, 
          flexDirection : 'row',
          backgroundColor : '#543533',
          height : 50,
          justifyContent : 'space-around'

      },
      navbar_containers : {
          justifyContent : 'center',
           alignItems : 'center'
        }
  })
  export default Home;