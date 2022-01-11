import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const Task = ( { task, deleteTask} ) => {
  
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>  
            <Text style={styles.itemText} >  # </Text>
            <Text style={styles.itemText} >  {  task.task } </Text>
            </View>
             
            <TouchableOpacity style={styles.square} onPress={ () => deleteTask && deleteTask(task.id)}>
                <Text style={styles.squareText}>X</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
       backgroundColor: '#FFF',
       padding: 15,
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FF007C', 
        borderRadius: 5, 
        alignItems: 'center',

    },
    squareText:{
        color: '#FFF',
        fontWeight: 'bold', 
        fontSize: 18,
        

    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,

    },

});
export default Task;