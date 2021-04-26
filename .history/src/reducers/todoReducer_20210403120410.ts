import { TodoTask, TodoActionTypes, TodoActions } from '../actions/todoActions';

export const todoReducer = (state = [] as TodoTask[], action: TodoActionTypes): TodoTask[] => {
  switch (action.type) {
    case TodoActions.ADD_TASK:
      return [
        ...state,
        action.payload
      ];
    case TodoActions.EDIT_TASK:
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    default:
      return state;
  }
};