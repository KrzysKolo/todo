import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ListTaskStyles } from './ListTask.module.scss';
import { useParams } from 'react-router-dom';

const style = bemCssModules(ListTaskStyles);

const ListTask: React.FC = (props) => {
  const { id } = useParams();
  return (
    <div className={style()}>

    </div>
  )
}

export default ListTask;
