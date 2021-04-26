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

export type DoneActionTypes = AddTaask | RemoveTaask | ImportTaask;

export const addDoneTask = (task: DoneTask): DoneActionTypes => ({
  type: DoneActions.ADD_TASK,
  payload: task,
});

export const removeDoneTask = (id: number): DoneActionTypes => ({
  type: DoneActions.REMOVE_TASK,
  payload: {
    id,
  }
});


export const importDoneTasks = (tasks: DoneTask[]): DoneActionTypes => ({
  type: DoneActions.IMPORT_TASKS,
  payload: tasks,
});