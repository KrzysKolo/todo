import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyle } from './Content.module.scss';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import ListTask from '../ListTask/ListTask';


const style = bemCssModules(ContentStyle);

const addTask = (): JSX.Element => <div>Add task</div>
const tasksList = (): JSX.Element => <div>Lista tasków</div>


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
