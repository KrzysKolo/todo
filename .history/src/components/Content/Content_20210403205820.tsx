import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';
import AddTask from '../AddTask/AddTask';
import ListTask from '../ListTask/ListTask';


const style = bemCssModules(ContentStyle);

const Content: React.FC = () => {
  return (
    <section className={style()}>
      <Switch>
        <Route component={AddTask} path="/addTask" />
        <Route component={ListTask} path="/:id" />
        <Route component={ListTask} path="/" />
        <Redirect from="*" to="/todo" />

      </Switch>
    </section>
  )
}

export default Content;
