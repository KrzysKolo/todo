import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';
import IconButton from '../IconButton/IconButton';

import deleteIcon from './../../image/clear-24px.svg';
import checkIcon from './../../image/done-24px.svg';
import createIcon from './../../image/create-24px.svg';
import { useParams } from 'react-router';

interface TaskProps {

};

const style = bemCssModules(TaskStyles);

const Task: React.FC<TaskProps> = (props) => {
  const { id } = useParams();
  const isTodoPart = id !== 'done';

  const moveToDone = (): void => {

   };

  const todoIcons = isTodoPart ? (
    <>
      <IconButton icon={checkIcon} onClick={() => console.log("asasasa")} />
      <IconButton icon={createIcon} onClick={() => console.log("asasasa")} />
    </>
  ): null;
  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>Tytuł 1</h2>
        {todoIcons}
        <IconButton icon={deleteIcon} onClick={() => console.log("asasasa")} />

      </div>
      <p className={style('description')}>Opis zadania</p>
      <p className={style('creation-date')}>Data wykonania</p>
      <p className={style('deadline')}>Data deadlineu</p>

    </div>
  )
}

export default Task;
