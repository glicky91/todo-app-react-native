import { createSlice } from '@reduxjs/toolkit';
import { TASKS } from '../../shared/tasks';
import { v4 as uuid } from 'uuid';

const initialState = {
    taskArray: TASKS,
    favoriteTasks: []
};

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        newAdditoinalTask: (state, action) => {
            console.log('newTaks action.payload', action.payload);
            console.log('newTaks state.', state.taskArray);
            const newTask = {
                id: uuid(),
                ...action.payload
            };
            state.taskArray.push(newTask);
        },
        removeTask: (state, action) => {
            const taskId = action.payload;
            //can you explain why do i need to set steate.task = vs above we didint have ot?
            state.taskArray = state.taskArray.filter((task) =>
                task.id !== taskId);
            console.log('removeTask action.payload', action.payload);
            console.log('removeTask state.taskArray', state.taskArray);
            //how do we get the code to know which recipe id?? Does this scoop method work?
            state.taskArray.filter((task) => task.id !== action.payload.id);
            console.log(action.payload.id)
        },

        editTask: (state, action) => {
            state.taskArray = state.taskArray.map(task =>
                (task.id === action.payload.id) ?
                    { ...task, ...action.payload } :
                    task

            );
            //     console.log('editRecipe action.payload', action.payload);
            //     console.log('editRecipe state.recipeArray', state.recipeArray);

            // },
            // updateSearchQuery: (state, action) => {
            //     state.searchQuery = action.payload
            // }
        }
    }
});

//////////////STOPED HERE

export const taskListReducer = taskListSlice.reducer;

export const { newAdditoinalTask, editTask, removeTask } = taskListSlice.actions;

// export const selectRecipes = (state) => {
//     const searchWord = state.recipesFav.searchQuery;
//     return state.recipesFav.recipeArray.filter((recipe) => {
//         return recipe.title.toLowerCase().includes(searchWord.toLowerCase())
//             || recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchWord.toLowerCase()))
//     });
// };









