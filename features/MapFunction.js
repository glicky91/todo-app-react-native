import { TASKS } from '../shared/tasks';

const TaskList = () => {

    TASKS.map((task, idx) => {
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

};

export default TaskList;
