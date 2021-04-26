import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ListTaskStyles } from './ListTask.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TodoTask } from '../../actions/todoActions';
import { DoneTask } from '../../actions/doneActions';
import Task from './../Task/Task';

const style = bemCssModules(ListTaskStyles);
type Task = TodoTask | DoneTask;

const ListTask: React.FC = (props) => {
  const { id } = useParams();
  const tasks = useSelector((state: RootState) => id === 'done' ? state.done : state.todo);

  return (
    <div className={style()}>
      {(tasks as Task[]).map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  )
}

export default ListTask;
