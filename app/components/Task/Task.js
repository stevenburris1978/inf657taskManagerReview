import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from "react-native";
import TaskProperties from "./TaskProperties";

export default function Task() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/office.png")}
          />          
          <Text style={styles.title}> Task Title </Text>
          <Text style={styles.description}>  Task Description </Text>

        </View>

        <TaskProperties />
    </ScrollView>        
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "orange",
        flexDirection: "column",
        padding: 25,
        borderRadius: 15,
    },
    image: {
        height: 70,
        width: 70,

        marginright: 10,
        borderRadius: 35,
        padding: 20,
    },

    title: {

        fontSize: 25,
        fontWeight: "bold",
        color: "yellow",
        padding: 5,
    },

    description: {

        fontSize: 25,
        fontWeight: "bold",
        color: "yellow",
        padding: 5,
    },
});

