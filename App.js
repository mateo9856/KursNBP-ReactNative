import React, { useState, useEffect } from "react";
import { View, Text, Picker, StyleSheet, Button } from "react-native";
import CourseList from "./CourseList";
const App = () => {
  
  const [datas, setDatas] = useState([]);
  const [selectedDate, setSelectedDate] = useState("015/A/NBP/2021");
  const [activeTable, setActiveTable] = useState([]);

  useEffect(() => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/last/50/?format=json')
    .then(response => response.json())
    .then((data) => {
      setDatas(Array.from(data.reverse()))
      setActiveTable(data[0])
      })
    .catch(err => console.error(err));
  }, [])
    
  function handlePress(e) {
    e.preventDefault();
    const filterValue = datas.filter(data => data.no === selectedDate);
    setActiveTable(filterValue[0]);
  }

  return (
    <View style={styles.container}>
      <Text>Kurs NBP</Text>
      <Text>Wybierz jedno z ostatnich 50 notowań</Text>
      <Picker
        selectedValue={selectedDate}
        style={{ height: 30, width: 160, fontSize: 8 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedDate(itemValue);
          setActiveTable([]);
        }}
      >
        {datas.map(data => (
          <Picker.Item label = {data.effectiveDate} value={data.no}/>
        ))}
      </Picker>
      <Button title = "Pokaż!" onPress={handlePress}/>
      {activeTable.no === selectedDate ?
      <CourseList value = {activeTable.rates} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;