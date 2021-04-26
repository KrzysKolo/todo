import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';

const style = bemCssModules(ContentStyle);

const Content: React.FC = () => {
  return (
    <section className={style()}>

    </section>
  )
}

export default Content;
