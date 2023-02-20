import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from "react-native";
import Card from "../shared/Card";
import TaskProperties from "./TaskProperties";

export default function TaskList({taskList}) {

const list = () => {
    return taskList.map((task) => {
      return(
        <Card key={task.id}>
            <Image style={styles.image} source={task.image} />
            <View style={styles.secondContainer}>
                
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>
            </View>
            <TaskProperties />
        </Card>
      );
    });
};

  return <ScrollView style={styles.container}>{list()}</ScrollView>;
}

  const styles = StyleSheet.create({

    container: {
        paddingTop: 100,
        padding: 25,
        
    },

    image: {
        height: 200,
        width: "100%",
    },

    title: {
        fontWeight: "bold",
        marginBottom: 7,
    },

    secondContainer: {

      paddingTop: 50,
      padding: 20,

    },
  
    description: {

      fontWeight: "bold",
      marginBottom: 7,
    },

  });
