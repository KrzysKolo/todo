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
