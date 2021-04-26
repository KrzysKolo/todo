import { TodoTask, TodoActionTypes, TodoActions } from '../actions/todoActions';

export const todoReducer = (state = [] as TodoTask[], action: TodoActionTypes): TodoTask[] => {
  switch (action.types) {
    default:
      return state;
  }
};