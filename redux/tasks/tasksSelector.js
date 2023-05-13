import { createSelector } from "@reduxjs/toolkit";

//full application state
export const tasksSelector = (state) => state.taskList

export const taskArraySelector = createSelector(tasksSelector, (state) => state.taskArray)

export const favTaskSelector = createSelector(tasksSelector, (state) => state.favoriteTasks)
