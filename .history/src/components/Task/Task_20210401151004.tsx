import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';

interface TaskProps {

};

const style = bemCssModules(TaskStyles);

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className={style()}>
      <div>
        <h2>Tytuł 1</h2>
        <button>Button</button>
      </div>
      <p>Opis zadania</p>
      <p>Data wykonania</p>
      <p>Data deadlineu</p>

    </div>
  )
}

export default Task;
