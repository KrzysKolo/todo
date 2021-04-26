import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';
import IconButton from '../IconButton/IconButton';

import deleteIcon from './../../image/clear-24px.svg';
import checkIcon from './../../image/done-24px.svg';
import createIcon from './../../image/create-24px.svg';

interface TaskProps {

};

const style = bemCssModules(TaskStyles);

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>Tytuł 1</h2>
        <div style={{border: '1px solid red'}>
          <IconButton icon={deleteIcon } onClick={() => console.log("click")} />
          <IconButton icon={checkIcon } onClick={() => console.log("click")} />
          <IconButton icon={createIcon} onClick={() => console.log("click")} />
        </div>
      </div>
      <p className={style('description')}>Opis zadania</p>
      <p className={style('creation-date')}>Data wykonania</p>
      <p className={style('deadline')}>Data deadlineu</p>

    </div>
  )
}

export default Task;
