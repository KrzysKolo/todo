import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';

interface TaskProps {

};

const style = bemCssModules(TaskStyles);

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className={style()}>

    </div>
  )
}

export default Task;
