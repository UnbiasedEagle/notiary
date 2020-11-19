import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Navbar from './components/Navbar';
import NoteList from './screens/NoteList';
import NoteEdit from './screens/NoteEdit';
import NoteDelete from './screens/NoteDelete';
import NoteCreate from './screens/NoteCreate';
import NoteShow from './screens/NoteShow';

const App = () => {
  return (
    <Router history={history}>
      <Navbar></Navbar>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={NoteList}></Route>
          <Route path='/notes/new' exact component={NoteCreate}></Route>
          <Route path='/notes/edit/:id' exact component={NoteEdit}></Route>
          <Route path='/notes/:id' exact component={NoteShow}></Route>
          <Route path='/notes/delete/:id' exact component={NoteDelete}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
