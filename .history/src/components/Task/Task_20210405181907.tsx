import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';
import IconButton from '../IconButton/IconButton';

import deleteIcon from './../../image/clear-24px.svg';
import checkIcon from './../../image/done-24px.svg';
import createIcon from './../../image/create-24px.svg';
import { useHistory, useParams } from 'react-router';
import { removeTodoTask, TodoTask } from '../../actions/todoActions';
import { addDoneTask, DoneTask, removeDoneTask } from '../../actions/doneActions';
import { useDispatch } from 'react-redux';



const style = bemCssModules(TaskStyles);

enum MonthsPl {
  'Styczeń', 'Luty',
  'Marzec', 'Kwiecień',
  'Maj', 'Czerwiec',
  'Lipiec', 'Sierpień',
  'Wrzesień', 'Październik',
  'Listopad', 'Grudzień'

};
function getTimeInformation(unixTime: number, stringPrefix: string): string {
  const date = new date(unixTime);
  const day = date.getDate();
  const month = MonthsPl[date.getMonth()];
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours();
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

  return `${stringPrefix} ${day} ${month} o godzinie: ${hour}:${minutes}`;
}



const Task: React.FC<TodoTask | DoneTask> = (props) => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>();
  const isTodoPart = id !== 'done';
  const dispatch = useDispatch();
  const history = useHistory();

  const moveToDone = (): void => {
    const changedTask: DoneTask = {
      ...props,
      endDate: Date.now(),
    };
    dispatch(addDoneTask(changedTask));
    dispatch(removeTodoTask(props.id));
  };

  const deleteTask = (): void => {
    if (isTodoPart) {
      dispatch(removeTodoTask(props.id));
    } else {
      dispatch(removeDoneTask(props.id));
    }
  };

  const editTask = (): void => {
    const location = {
      pathname: '/addTask',
      state: props,
    }
    history.push(location);
  };

  const todoIcons = isTodoPart
    ? (
    <>
      <IconButton icon={checkIcon} onClick={moveToDone} />
      <IconButton icon={createIcon} onClick={editTask} />
    </>
    )
    : null;


  const createDateToDisplay = isTodoPart
    ? (
      <p className={style('creation-date')}>Data utworzenia:</p>
    )
    : (
      <p className={style('creation-date')}>Data zakończenia:</p>
    );

  const isDeadlineVisible = props.deadline
    ? (
      <p className={style('creation-date')}>Data deadlineu:</p>
    )
    : null;

  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>{props.title}</h2>
        {todoIcons}
        <IconButton icon={deleteIcon} onClick={deleteTask} />

      </div>
      <p className={style('description')}>{props.description}</p>
      {createDateToDisplay}
      {isDeadlineVisible}

    </div>
  )
}

export default Task;
