import React from 'react'
import RenderList from '../features/RenderList'
import { ScrollView } from 'react-native';
import AddNewTask from '../features/AddNewTask';

export default function NewTaskScreen() {
    return (
        <ScrollView>
            <AddNewTask />
        </ScrollView>
    )
}