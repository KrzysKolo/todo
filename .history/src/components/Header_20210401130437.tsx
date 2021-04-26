import React from 'react';
import { Link, link } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyle } from './Header.module.scss';

const style = bemCssModules(HeaderStyle);

const Header: React.FC = () => {
  return (
    <nav className={style()}>
      <ul className={style("list")}>
        <li className={style('element')}>
          <Link to="/todo">Do zrobienia</Link>
        </li>
        <li className={style('element')}>
          <Link className={style('link')} to="/done">Zrobione</Link>
        </li>
        <li className={style('element')}>
          <Link to="/addTask">Dodaj zadanie</Link>
        </li>

      </ul>


    </nav>
  )
}

export default Header;
