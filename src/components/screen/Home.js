import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TypingText from 'react-native-typical';
import Table from '../Table';
// import  Search_api  from '../../Api/search_Api';
import axios from 'axios';
// import { ActivityIndicator } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

const Home = () => {
    const [stateName,setStateName] = useState('');
    const [count ,setCount] = useState(false);
    const [newdata, setNewdata] = useState(' ');
    const isFocused = useIsFocused();

    const Search_api = async() =>{
      console.log('in the api');
      return await axios.get('https://data.covid19india.org/v4/min/data.min.json')
      .then(function(response){
        if (response.status == 200) {
          console.log("response.data : ",response);
          setNewdata(response.data);
          // ToastAndroid.show(response.data.message,10000)
        }else {
          console.log("response.data : ",response);
        }
      })
      .catch(function(err){
        console.log('Error is : ',err);
      })
  }
    useEffect(()=>{
      Search_api();
      console.log('data',typeof newdata);
    }, [isFocused]);


    if (newdata == ' ' || newdata == null) {
      console.log('newdata is logged');
      return(
        <View style={{
          height : '100%',
          width : '100%',
          justifyContent : 'center',
        }}>
      <ActivityIndicator/>
    </View>
      )
      
    }else{
  return (
    
    <SafeAreaView>
      <ScrollView>
        <View style={style.navbar_container}>
          <View style={style.navbar_containers}>
            <Text>English</Text>
          </View>
          <View style={style.navbar_containers}>
            <Text
              onPress={() => {
                console.log('Home screen will be triggered');
              }}>
              Covid19India
            </Text>
          </View>
          <View style={style.navbar_containers}>
            <Icon name="bars" size={20} />
          </View>
        </View>
        <View style={style.alert_Box}>
            <Icon name='exclamation' color={'#dc3545'}/>
          <Text style={style.red_text}>
            After 18 months of daily updates, we stopped our
          </Text>
          <Text style={style.red_text}>
            operations on 31st October, 2021. You can
          </Text>
          <Text style={style.red_text}>
            only view data from January 2020 to Oct
          </Text>
          <Text style={style.red_text}>ober 2021 on this App.</Text>

          <View style={[style.alert_Box, style.alert_Box_border]}>
            <View>
              <Text style={style.red_text}>Read more</Text>
            </View>
            <View>
              <Icon name="arrow-right" />
            </View>
          </View>
        </View>
        <View style = {style.navbar_containers}>
            <View style = {{padding :20}}>
            <Text>
                  Search Your District or State
              </Text>
            </View>
            <View style={style.search_field}>
                <View style={{padding : 4}}>
                    <Icon 
                    name = 'search' 
                    size={30}
                    color ='#D3D3D3'/>
                </View>
                {
                  count ?
                  <TextInput 
            style={{
                width : '100%',
                fontSize : 27,
                color : '#818589',
            }}
            value={stateName}
            onChangeText = { (text) => {
                setStateName(text)
                console.log('clicked');
            }
            }
            />
             :
            
            <TouchableOpacity onPress={ () => setCount(true)}>
                    <Text>
                  <TypingText
                  style={{
                    color : '#D3D3D3',
                    fontSize : 27,
                    justifyContent : 'center'
                  }}
                steps={["MAHARASHTRA", 100, "ANDHRA PRADESH", 10000, "GOA" , 10000]}
                loop={Infinity}
            /> </Text>
             </TouchableOpacity>
                } 

            </View>    
          </View>
          <View>
            {
              newdata != '' ? 
              
              <Table tableData = {newdata}/>
               :
              <></>
            }
            
          </View>
      </ScrollView>
      </SafeAreaView>
  
  )
}
};

const style = StyleSheet.create({
  container: {
    height: 100,
    width: '80%',
    backgroundColor: '#858484',
  },
  navbar_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#7ca9f4',
    height: 50,
    justifyContent: 'space-around',
  },
  navbar_containers: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert_Box: {
    display: 'flex',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    padding: 2,
    alignItems: 'center',
  },
  alert_Box_border: {
    borderColor: '#dc3545',
    borderWidth: 1,
    width: 'auto',
    margin: 5,
    flexDirection: 'row',
  },
  red_text: {
    color: '#dc3545',
  },
  search_field : {
    flex:1,
    width :'90%',
    height : 'auto',
    backgroundColor : '#FFF',
    padding : 18,
    paddingLeft : 10,
    flexDirection : 'row',
    shadowColor: '#818589',
    shadowOffset: { width: 3, height: 3 },
    elevation: 20,
    shadowRadius: 3,
    shadowOpacity: 0.4,
    margin : 10
  },

});
export default Home;
