import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ListTaskStyles } from './ListTask.module.scss';

const style = bemCssModules(ListTaskStyles);

const ListTask: React.FC = (props) => {
  return (
    <div className={style()}>

    </div>
  )
}

export default ListTask;
