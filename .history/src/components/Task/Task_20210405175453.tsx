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

  const isDeadkineVisible = props.deadline
    ? (
      <p className={style('creation-date')}>Data utworzenia:</p>
    )
    : (
      <p className={style('creation-date')}>Data zakończenia:</p>
    );

  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>{props.title}</h2>
        {todoIcons}
        <IconButton icon={deleteIcon} onClick={deleteTask} />

      </div>
      <p className={style('description')}>{props.description}</p>
      {createDateToDisplay}
      <p className={style('deadline')}>Data deadlineu</p>

    </div>
  )
}

export default Task;
