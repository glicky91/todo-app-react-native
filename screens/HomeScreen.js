//3 Qs for instructor: 1) can you explain the code on line 21 --> how it helps create single line cross offs? 2) question on line 61 of insposcreen 3) how do get it to cross out like Jims
import React from 'react'
import { useState } from 'react';
import { Button, FlatList, ScrollView, TouchableOpacity, Text, StyleSheet, Alert, View } from 'react-native';
import { Card, ListItem, Input } from 'react-native-elements';
import { TASKS } from '../shared/tasks';
import { SwipeRow } from "react-native-swipe-list-view";
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
    const [name, setName] = useState('');
    const [tasklist, setTasklist] = useState(TASKS);
    const [taskStatus, setTaskStatus] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // const handlePress = () => {
    //     setIsPressed(!isPressed);
    // };

    //this was created with help from chatgpt
    const handlePress = (index) => {
        setTasklist((prevState) => {
            const updatedList = prevState.map((task, i) => {
                if (i === index) {
                    return {
                        ...task,
                        isPressed: !task.isPressed
                    };
                }
                return task;
            });
            return updatedList;
        });
    };



    const handleSubmit = () => {
        const newTask = {
            name
        };

        setTasklist(tasklist.concat(newTask));
        console.log(tasklist);
    }
    const resetForm = () => {
        setName('');

    }

    const renderTaskList = ({ item: task, index }) => {
        const taskName = task.name
        return (
            <SwipeRow rightOpenValue={-100}>
                <View style={styles.deleteView}>
                    {/* can you explain why the following works? */}
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() => Alert.alert('Delete Task?',
                            'Are you sure you wish to delete the task ' + task.name + '?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log(task.name + 'Not Deleted'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => setTasklist(tasklist.filter(task => task.name !== taskName))
                                }
                            ],
                            { cancelable: false }
                        )}
                    >
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListItem>
                        <ListItem.Content>
                            <TouchableOpacity
                                // style={isPressed ? styles.pressedButton : styles.defaultButton} => this changes all of the button colors
                                style={[styles.buttonStyle, { backgroundColor: task.isPressed ? 'black' : 'white' }]}
                                onPress={() => handlePress(index)}>
                                <ListItem.Title style={isPressed ? styles.pressedButton : styles.defaultButton}>{task.name} </ListItem.Title>
                            </TouchableOpacity>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </SwipeRow >
        )
    };

    return (
        <ScrollView>
            <Card>
                <Card.Title>To Do List</Card.Title>
                <Card.Divider />
                <Input
                    placeholder='Add Task'
                    leftIcon={{ type: 'font-awesome', name: 'clipboard' }}
                    onChangeText={(name) => setName(name)}
                    value={name}
                />
                <View style={{ margin: 10 }}>
                    <Button
                        title='Submit'
                        color='#74a0ef'
                        onPress={() => {
                            handleSubmit()
                            resetForm();
                        }}
                    />
                </View>
                <FlatList
                    data={tasklist}
                    renderItem={renderTaskList}
                />
            </Card>
        </ScrollView>

    )
};
const styles = StyleSheet.create({
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center'
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
    }
})
export default HomeScreen;