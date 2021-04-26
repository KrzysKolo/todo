import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';

const style = bemCssModules(ContentStyle);

const addTask = (): JSX.Element => <div>Add task</div>
const tasksList = (): JSX.Element => <div>Lista tasków</div>
const toDo = (): JSX.Element => <div>jsakjsakjsak</div>

const Content: React.FC = () => {
  return (
    <section className={style()}>
      <Switch>
        <Route component={addTask} path="/addTask" />
        <Route component={tasksList} path="/:id" />
        <Route component={toDo} path="/" />
        <Redirect from="*" to="/todo" />

      </Switch>
    </section>
  )
}

export default Content;
