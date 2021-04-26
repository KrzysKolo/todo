import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddTaskStyles } from './AddTask.module.scss';
import { useHistory, useLocation } from 'react-router';
import { addTodoTask, editTodoTask, TodoTask } from '../../actions/todoActions';
import { useDispatch } from 'react-redux';

const style = bemCssModules(AddTaskStyles);
const EDIT_LABEL = "Edytuj";
const ADD_LABEL = "Dodaj task";

const AddTask: React.FC = () => {

  const editState = useLocation().state as Partial<TodoTask>;
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>(editState?.title ?? '');
  const [description, setDescription] = useState<string>(editState?.description ?? '');
  const [isDeadlineActive, setIsDeadlineActive] = useState<boolean>(true);

  const [deadline, setDeadline] = useState<string>(editState?.deadline
    ? new Date(editState.deadline).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10)
  );

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    event.target.id === 'title-task'
      ? setTitle(event.target.value)
      : setDescription(event.target.value)
  };
  const toggleDeadline = (): void => setIsDeadlineActive(state => !state)
  const handleOnChangeDeadline = (event: React.ChangeEvent<HTMLInputElement>): void => setDeadline(event.target.value);
  const handleOnSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    const location = {
      pathname: '/todo',
    };
    const newTask: TodoTask = {
      id: editState?.id ?? Date.now(),
      title,
      dataCreation: editState?.id ?? Date.now(),
      description,
      deadline: isDeadlineActive ? new Date(deadline).getTime() : undefined,

    };

    if (editState?.id) {
      dispatch(editTodoTask(newTask));
    } else {
      dispatch(addTodoTask(newTask))
    }

    history.push(location);
  }

  const buttonLabel = editState?.id
    ? EDIT_LABEL
    : ADD_LABEL;

  return (
    <div className={style()}>
      <form className={style('form')}>
        <div className={style('form-row')}>
          <label
            htmlFor="title-task"
           >
              Tytuł zadania </label>
          <input
            id="title-task"
            className={style('form-field')}
            onChange={handleOnChangeText }
            type="text"
            value={title}
          />
        </div>

        <div className={style('form-row')}>
          <label htmlFor="description-task">Opis zadania </label>
          <textarea
            id="description-task"
            className={style('form-field')}
            onChange={handleOnChangeText }
            value={description}

          />
        </div>

        <div className={style('form-row')}>
          <label htmlFor="deadline-task">Deadline</label>
          <input
            id="deadline-task"
            onClick={toggleDeadline }
            type="checkbox"
            value={isDeadlineActive.toString()}
          />
          {deadline}
          {isDeadlineActive && <input onChange={handleOnChangeDeadline} type="date" value={deadline} />}
        </div>

        <button onClick={handleOnSubmit} type="submit">
          {buttonLabel}

        </button>
      </form>
    </div>
  )
}

export default AddTask;
