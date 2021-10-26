import React from 'react';
import { Home } from './Home';
import { Switch,Route } from 'react-router';
import { About } from './About';
import { MyTodoList } from './MyToDoList';
import  NotFound from './404';
import { Nav } from './Nav';
const App: React.FC = () => {
  
  return <>
    <Nav/>
    <Switch>
      <Route path='/' exact >
        <Home/>
      </Route>
      <Route path='/about' exact >
        <About/>
      </Route>
      <Route path='/todo/:todoSlug'>
        <MyTodoList/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </>
}

export default App;