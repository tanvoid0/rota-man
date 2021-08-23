import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {styles} from "./styles";
import {DataTable, Dialog, Portal} from "react-native-paper";
import moment from "moment";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleScreen() {
  const [startVisible, setStartVisible] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <DataTable>
        {/*@ts-ignore*/}
        <DataTable.Header>
          <DataTable.Title>
            Weekday
          </DataTable.Title>
          <DataTable.Title>Start</DataTable.Title>
          <DataTable.Title>End</DataTable.Title>
        </DataTable.Header>
        {[...Array(7)].map((i, key) => (
          <DataTable.Row key={key}>
            <DataTable.Cell>{moment().day(key).toString().split(" ")[0]}</DataTable.Cell>
            <DataTable.Cell onPress={() =>setShow(true)}>
              {date.toString()}
              {show && (
                <RNDateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </DataTable.Cell>
            <DataTable.Cell>L</DataTable.Cell>
          </DataTable.Row>
        ))}

      </DataTable>
    </View>
  );
}


