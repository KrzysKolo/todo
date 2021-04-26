export enum TodoActions {
  ADD_TASK = 'Add todo task',
  EDIT_TASK = 'Edit todo task',
  REMOVE_TASK = 'Remove todo task',
  IMPORT_TASKS = 'Import todo taskS',
}

export interface TodoTask {
  id: number;
  title: string;
  description: string;
  dataCreation: number;
  deadline?: number;
}
interface AddTaask {
  type: TodoActions.ADD_TASK;
  payload: TodoTask;
}

interface RemoveTaask {
  type: TodoActions.REMOVE_TASK;
  payload: {
    id: number;
  }
}

interface EditTaask {
  type: TodoActions.EDIT_TASK;
  payload: TodoTask;
}
interface IMPORTTaask {
  type: TodoActions.IMPORT_TASKS;
  payload: TodoTask[];
}
