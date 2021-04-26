import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as NavigationStyle } from './Navigation.module.scss';

const style = bemCssModules(NavigationStyle);

const Navigation: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export default Navigation;
