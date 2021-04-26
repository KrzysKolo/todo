import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as AddTaskStyles } from './AddTask.module.scss';

const style = bemCssModules(AddTaskStyles);

const AddTask: React.FC<AddTaskProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDeadlineActive, setIsDeadlineActive] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<number>(new Date().toISOString().slice(0, 10));

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
            onChange={ }
            type="text"
            value={title}
          />
        </div>

        <div className={style('form-row')}>
          <label htmlFor="description-task">Opis zadania </label>
          <textarea
            id="description-task"
            className={style('form-field')}
            onChange={ }
            value={description}

          />
        </div>

        <div className={style('form-row')}>
          <label htmlFor="deadline-task">Deadline</label>
          <input
            id="deadline-task"
            onClick={ }
            type="checkbox"
            value={isDeadlineActive.toString()}
          />
          {isDeadlineActive && <input type="date" value={deadline} />}
        </div>

        <button onClick={()=> console.log("klik")} type="submit">Add task</button>
      </form>
    </div>
  )
}

export default AddTask;
