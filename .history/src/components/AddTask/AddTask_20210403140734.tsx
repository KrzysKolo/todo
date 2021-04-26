import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddTaskStyles } from './AddTask.module.scss';

const style = bemCssModules(AddTaskStyles);

const AddTask: React.FC<AddTaskProps> = () => {
  return (
    <div className={style()}>

    </div>
  )
}

export default AddTask;
