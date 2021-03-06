import { DoneTask, DoneActionTypes, DoneActions } from '../actions/doneActions';

export const todoReducer = (state = [] as TodoTask[], action: TodoActionTypes): TodoTask[] => {
  switch (action.type) {
    case TodoActions.ADD_TASK:
      return [
        ...state,
        action.payload
      ];
    case TodoActions.EDIT_TASK:
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    case TodoActions.REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    case TodoActions.IMPORT_TASKS:
      return action.payload;
    default:
      return state;
  }
};