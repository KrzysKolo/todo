import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';

interface Taskprops {

};

const style = bemCssModules(TaskStyles);

const Task = () => {
  return (
    <div>

    </div>
  )
}

export default Task;
