//Hoping to use this to create filters for the urgency and status 
//will probably need to use state here somewhere to help update what is shown
import { TASKS } from "../shared/tasks";


export default function urgentFilter({ TASKS }) {
    return (
        TASKS.filter((task) => {
            return (
                task.urgency === "Urgent"
            )
        })
    )
};


