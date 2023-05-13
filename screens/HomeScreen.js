//This is for the actual home page
import React from 'react'
import { useState } from 'react';
import RenderList from '../features/RenderList'
import { Button, ScrollView, TouchableOpacity, Text, Modal, View } from 'react-native';
import { Card, ListItem, Input } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";
import { useSelector } from 'react-redux';
import { taskArraySelector } from '../redux/tasks/tasksSelector';
import { useDispatch } from 'react-redux';
import ModalEdit from '../features/ModalEdit';

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [urgency, setUrgency] = useState('');
    const [status, setStatus] = useState('');
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const taskArray = useSelector(taskArraySelector);
    const resetForm = () => {
        setName('');
        setStatus('');
        setUrgency('');
    }
    const handleEditSubmit = (values) => {
        const updateTask = {
            id: task.id,
            name: values.name,
            urgency: values.urgency,
            status: values.status
        }
        dispatch(editTask(updateTask));
        setModalOpen(false);
        resetForm();
    }


    return (
        <ScrollView>
            <>
                <Card>
                    <Card.Title>To Do List</Card.Title>
                    <Card.Divider />
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Add New Task')
                        }
                    >
                        <Card.Title>+ Add New Task</Card.Title>
                    </TouchableOpacity>

                    {taskArray.map((task, idx) => {
                        return (
                            <>
                                <ListItem key={idx}>
                                    <ListItem.Content>
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate('Details', { task })
                                            }
                                        >
                                            <ListItem.Subtitle>{task.name}</ListItem.Subtitle>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => console.log("test")}
                                            style={{ backgroundColor: "#6495ED", alignItems: 'center' }}
                                            accessibilityLabel="This is the urgency of your task"
                                        >
                                            <Text style={{ fontStyle: "italic" }}>{task.urgency}</Text>
                                        </TouchableOpacity>
                                        <Button
                                            onPress={() => setShowModal(!showModal)}
                                            title={task.status}

                                            color="#841584"
                                            accessibilityLabel="This is the status of your task"
                                        />

                                    </ListItem.Content>
                                </ListItem>
                                <Modal
                                    animationType='slide'
                                    transparent={false}
                                    visible={showModal}
                                    onRequestClose={() => setShowModal(!showModal)}
                                >
                                    <Input

                                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                        leftIconContainerStyle={{ paddingRight: 10 }}
                                        onChangeText={(name) => setName(name)}
                                        value={task.name}
                                    />

                                    <Picker
                                        selectedValue={task.urgency}
                                        onValueChange={(itemValue) => setUrgency(itemValue)}
                                    >
                                        <Picker.Item label='Urgent' value={'urgent'} />
                                        <Picker.Item label='Not-Urgent' value={'not-urgent'} />
                                    </Picker>
                                    <Picker
                                        selectedValue={task.urgency}
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
                                                handleEditSubmit();
                                            }}
                                        />
                                    </View>
                                    <View style={{ margin: 10 }}>
                                        <Button
                                            onPress={() => {

                                                resetForm();
                                            }}
                                            color='#808080'
                                            title='Cancel'
                                        />
                                    </View>
                                </Modal>
                                {/* <ModalEdit task={task} showModal={showModal} urgency={urgency} status={status} /> */}
                            </>
                        )
                    })}
                </Card>

            </>
        </ScrollView>
    )
}

export default HomeScreen;