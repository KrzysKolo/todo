import React from 'react';
import { Link } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyle } from './Header.module.scss';
import todo from './../../image/todo-4783676_1280.png';

const style = bemCssModules(HeaderStyle);

const Header: React.FC = () => {
  return (
    <nav className={style()}>
      <img src={todo} alt="todo-logo" />
      <ul className={style("list")}>
        <li className={style('element')}>
          <Link className={style('list')}  to="/todo">Do zrobienia</Link>
        </li>
        <li className={style('element')}>
          <Link className={style('list')} to="/done">Zrobione</Link>
        </li>
        <li className={style('element')}>
          <Link className={style('list')} to="/addTask">Dodaj zadanie</Link>
        </li>

      </ul>


    </nav>
  )
}

export default Header;
