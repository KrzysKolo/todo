import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddTaskStyles } from './AddTask.module.scss';

const style = bemCssModules(AddTaskStyles);

const AddTask: React.FC<AddTaskProps> = () => {
  return (
    <div className={style()}>
      <form className={style('form')}>
        <div className={style('form-row')}>
          <label htmlFor="title-task">Tytuł zadania </label>
          <input id="title-task"  />
        </div>

        <div className={style('form-row')}>
          <label htmlFor="title-task">Tytuł zadania </label>
          <input id="title-task"  />
        </div>
        <button>Add task</button>
      </form>
    </div>
  )
}

export default AddTask;
