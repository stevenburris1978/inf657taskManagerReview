import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from "react-native";
import Card from "../shared/Card";

export default function TaskList({taskList}) {

const list = () => {
    return taskList.map((task) => {
      return(
        <Card key={task.id}>
            <View style={styles.secondContainer}>
                
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>
            </View>
        </Card>
      );
    });
};

  return <ScrollView style={styles.container}>{list()}</ScrollView>;


  
}

