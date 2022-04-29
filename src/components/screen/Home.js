import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TypingText from 'react-native-typical';
// import  Search_api  from '../../Api/search_Api';
import axios from 'axios';
const Home = () => {
    const [stateName,setStateName] = useState('');
    const [count ,setCount] = useState(false);

    useEffect(()=>{
      Search_api();
    },[])
    const Search_api = async() =>{
      const response = await axios.get('https://api.covid19india.org/state_district_wise.json');
      // return await axios.get('https://api.covid19india.org/state_district_wise.json',
      // {
      //     headers : {
      //         Accept:'*/*',
      //     }})
      // .then(function(resp){
      //   console.log(resp);
      // })
      console.log(response);
      // .catch(err =>{
      //     console.log(err);
      // })
  }
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
      </ScrollView>
    </SafeAreaView>
  );
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
