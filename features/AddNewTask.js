//import { Button, TextInput, View, Col } from 'react-native';
import { v4 as uuid } from 'uuid';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';
import { TASKS } from '../shared/tasks';
import { useDispatch } from 'react-redux';
import { newAdditoinalTask } from '../redux/tasks/tasksReducer';

//will need to add some state
const AddNewTask = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [urgency, setUrgency] = useState('');
    const [status, setStatus] = useState('');


    const handleSubmit = () => {
        const newTask = {
            id: uuid(),
            name,
            urgency,
            status
        };
        console.log(newTask);
        dispatch(newAdditoinalTask(newTask))
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setStatus('');
        setUrgency('');
    }

    return (

        <>
            <View>
                <Input
                    placeholder='Task Name'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(name) => setName(name)}
                    value={name}
                />

                <Picker
                    selectedValue={urgency}
                    onValueChange={(itemValue) => setUrgency(itemValue)}
                >
                    <Picker.Item label='Urgent' value={'urgent'} />
                    <Picker.Item label='Not-Urgent' value={'not-urgent'} />
                </Picker>
                <Picker
                    selectedValue={status}
                    onValueChange={(itemValue) => setStatus(itemValue)}
                >
                    <Picker.Item label='not-started' value={'not-started'} />
                    <Picker.Item label='in-progress' value={'in-progress'} />
                    <Picker.Item label='completed' value={'completed'} />
                </Picker>
                <View style={{ margin: 10 }}>
                    <Button
                        title='Submit'
                        color='#5637DD'
                        onPress={() => {
                            Keyboard.dismiss
                            handleSubmit();
                        }}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        onPress={() => {
                            Keyboard.dismiss
                            resetForm();
                        }}
                        color='#808080'
                        title='Cancel'
                    />
                </View>
            </View>
        </>
    );
};

export default AddNewTask;