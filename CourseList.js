import React, { useState, useEffect } from "react";
import { View, Text, Picker, StyleSheet, Button, FlatList } from "react-native";

const CourseList = (props) => {
    return (
        <View style={styles.CourseContainer}>
            <FlatList 
             data={props.value}
             renderItem={({item}) => <Text style = {styles.TextStyle}>{item.currency}<Text style = {{fontWeight:'bold'}}> {item.code}</Text> <Text>{item.mid} PLN</Text></Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    CourseContainer: {
      flex: 2,
      padding: 10,
      marginTop:15,
      width:200,
      alignItems: "center"
    },
    TextStyle: {
        height: 50,
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 5,
    }
  });
  

export default CourseList;