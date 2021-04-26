export enum DoneActions {
  ADD_TASK = 'Add done task',
  REMOVE_TASK = 'Remove done task',
  IMPORT_TASKS = 'Import done taskS',
}

export interface DoneTask {
  id: number;
  title: string;
  description: string;
  endDate: number;
  deadline?: number;
}
interface AddTaask {
  type: DoneActions.ADD_TASK;
  payload: DoneTask;
}

interface RemoveTaask {
  type: DoneActions.REMOVE_TASK;
  payload: {
    id: number;
  }
}


interface ImportTaask {
  type: DoneActions.IMPORT_TASKS;
  payload: DoneTask[];
}

export type TodoActionTypes = AddTaask | RemoveTaask | EditTaask | ImportTaask;

export const addTodoTask = (task: TodoTask): TodoActionTypes => ({
  type: TodoActions.ADD_TASK,
  payload: task,
});

export const removeTodoTask = (id: number): TodoActionTypes => ({
  type: TodoActions.REMOVE_TASK,
  payload: {
    id,
  }
});

export const editTodoTask = (task: TodoTask): TodoActionTypes => ({
  type: TodoActions.EDIT_TASK,
  payload: task,
});

export const importTodoTasks = (tasks: TodoTask[]): TodoActionTypes => ({
  type: TodoActions.IMPORT_TASKS,
  payload: tasks,
});