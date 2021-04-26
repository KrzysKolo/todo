import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';

const style = bemCssModules(ContentStyle);

const addTask = (): JSX.Element => <div>Add task</div>
const Content: React.FC = () => {
  return (
    <section className={style()}>
      <Switch>
        <Route component={addTask } path="/addTask" />
        <Route component={ Hello} path="/:id" />
        <Route component={Hello} path="/" />
        <Redirect from="*" to="/todo" />

      </Switch>
    </section>
  )
}

export default Content;
