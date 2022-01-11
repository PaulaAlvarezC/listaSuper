import {
  Button,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Task from './src/components/Task';

const App = ()  => {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const onChange = (text) => {
    //console.warn({text});
    setTask(text);
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, {id: Math.random(), task}]);
    setTask(null); 

  }
  const deleteTask = (id) => {
    
    setTaskItems(taskItems.filter( task => task.id !== id));
  }

  

  const completeTask = (id) => {
    
    /*
    TO DO: CAMBIAR STYLE DE TEXT PARA QUE SE VEAN LAS TAREAS COMPLETADAS
    console.warn(id);
    
    */

  }


  return (
      <SafeAreaView style={ styles.container }> 
        <View style={styles.container}>
          <View style={styles.taskWrapper}> 
            <View style={styles.titleWrapper}> 
              <Image
                style={{ width: 100, height: 100, marginBottom: 15 }}
                source={require("./assets/icon.png")}
              />
              <Text style={styles.title}>Lista Super</Text>
               
            </View> 
            <View style={styles.items}>
               {/* { taskItems.map( (item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={ () => completeTask(index)}>
                    <Task  text={item}  
                deleteTask={deleteTask} />
                  </TouchableOpacity>
                ) 
                })
              }   */}
              
              { taskItems.length > 0 ? (
                  <FlatList
                    keyExtractor={(item) => item.id}
                    refreshing={true}
                    data={taskItems}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity key={item.id} onPress={ () => completeTask(item.id)}>
                        <Task task={item} 
                          deleteTask={deleteTask}/>
                       </TouchableOpacity> 
                      ) 

                    }  
                      
                    } 
                    />
              ) : (
                  <Text>No hay productos agregados</Text>
              )
            }  
            </View>
          </View>
          <KeyboardAvoidingView
              behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
              style={ styles.writeTaskWrapper }
          >
          <TextInput style={styles.input} placeholder={'¿Qué te falta?'} onChangeText={(text) => setTask(text)}
            value={task} />
          <TouchableOpacity onPress={ () => handleAddTask()}>
            <View style={styles.addWrapper}> 
              <Text style={styles.addText}> + </Text>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  },
  titleWrapper: {
    alignItems: 'center',
  },
   
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  items: {
    marginTop: 30,
    
  },
  writeTaskWrapper: { 
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: { 
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: { 
    width: 60,
    height: 60,
    backgroundColor: '#FF007C',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0', 
    
  },
  addText: { 
    color: '#FFF',
    fontWeight: 'bold', 
    fontSize: 24,
     
  },
   


});



export default App;
