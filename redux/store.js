import { configureStore } from '@reduxjs/toolkit';

import { taskListReducer } from "./tasks/tasksReducer";

export const store = configureStore({
    reducer: {
        taskList: taskListReducer

    },
});
