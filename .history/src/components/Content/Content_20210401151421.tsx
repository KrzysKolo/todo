import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';
import Task from '../Task/Task';

const style = bemCssModules(ContentStyle);

const addTask = (): JSX.Element => <div>Add task</div>
const tasksList = (): JSX.Element => <div>Lista tasków</div>


const Content: React.FC = () => {
  return (
    <section className={style()}>
      <Switch>
        <Route component={addTask} path="/addTask" />
        <Route component={tasksList} path="/:id" />
        <Route component={Task} path="/" />
        <Redirect from="*" to="/todo" />

      </Switch>
    </section>
  )
}

export default Content;
