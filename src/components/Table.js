import React,{useState} from "react";
import { View,
        Text,
        StyleSheet,
        FlatList
     } from 'react-native';
        import { DataTable } from 'react-native-paper';
const Table = ({tableData}) =>{
    console.log('In table',[tableData]);
        const [count,setCount] = useState(false)
        let newArray = [];
        let stateNames = Object.keys(tableData);
        console.log('Whole data looks like this',stateNames[0]);
        stateNames.forEach(state=>{
            newArray.push({ 'State' : state ,'data': tableData[state]})
            // console.log("14",tableData[state])
        })
        console.log(newArray);
       
    
    let actualData = Object.entries(tableData?.AR?.total);
    var arr = ['John','john@kindacode.com','33']

    return(
        <View>
        
                
        <DataTable>
        <DataTable.Header>
          <DataTable.Title style={Style.tableCell}>Name</DataTable.Title>
          <DataTable.Title style={Style.tableCell}>confirmed</DataTable.Title>
          <DataTable.Title style={Style.tableCell}>deceased</DataTable.Title>
          <DataTable.Title style={Style.tableCell}>recovered</DataTable.Title>
          <DataTable.Title style={Style.tableCell}>tested</DataTable.Title>
        </DataTable.Header>

        <FlatList
        data={newArray}
        renderItem={ (item) =>{
            console.log(item.item.data.total);
            return(
                <View>
            <DataTable.Row style={{marginTop : 5,borderBottomColor : '#FFF'}} onPress = { () =>{setCount(!count)}}>
          <DataTable.Cell  style={Style.tableCell}>{item.item.State}</DataTable.Cell>
          <DataTable.Cell  style={Style.tableCell}>{item.item.data.total.confirmed}</DataTable.Cell>
          <DataTable.Cell  style={Style.tableCell}>{item.item.data.total.deceased}</DataTable.Cell>
          <DataTable.Cell  style={Style.tableCell}>{item.item.data.total.recovered}</DataTable.Cell>
          <DataTable.Cell  style={Style.tableCell}>{item.item.data.total.tested}</DataTable.Cell>
        </DataTable.Row>
        {count ? 
            <>
            <Text>Click on me </Text>
            </>
            : 
            <>
            </>
        }
        <View>

        </View>
        </View>
        )
        }}
        keyExtractor={item => item.index}
      />
        </DataTable>
        </View>
    )
}
const Style= StyleSheet.create({
    tableCell : {
        backgroundColor : '#f6f6f7',
        flex : 1,
        width : 'auto',
        margin : 2,
        flexWrap :'wrap',
        justifyContent : 'center',
        alignContent : 'center'
    }
})
export default Table;