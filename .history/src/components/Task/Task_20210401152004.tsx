import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';

interface TaskProps {

};

const style = bemCssModules(TaskStyles);

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>Tytuł 1</h2>
        <button type="button">Button</button>
      </div>
      <p className={style('description')}>Opis zadania</p>
      <p className={style('creation-date')}>Data wykonania</p>
      <p className={style('deadline')}>Data deadlineu</p>

    </div>
  )
}

export default Task;
