//This is where I'm going to give the layout fo the list

import { Button, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TASKS } from "../shared/tasks";
import TaskList from './MapFunction';
import { useState } from 'react';
import AddNewTask from './AddNewTask.js';

//this will have to be updated with state
const RenderList = ({ navigation }) => {
    const [tasks, setTasks] = useState(TASKS);

    const addNewTask = (task) => {
        return (
            setTasks(tasks.concat(task))
        )
    };
    // if you want the task to be on top of the list, sort your list by creation date. 
    return (
        tasks.map((task, idx) => {
            return (
                <ListItem key={idx}>
                    <ListItem.Content>
                        <ListItem.Subtitle>{task.name}</ListItem.Subtitle>

                        <Button
                            onPress={console.log("test")}
                            title={task.urgency}
                            color="#841584"
                            accessibilityLabel="This is the urgency of your task"
                        />
                        <Button
                            onPress={console.log("ideally this would be a drop down where you could change the status of your task as well as show the status")}
                            title={task.status}

                            color="#841584"
                            accessibilityLabel="This is the status of your task"
                        />
                    </ListItem.Content>
                </ListItem>
            )
        })

    )
};

export default RenderList;