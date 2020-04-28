import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import MainApp from './Containers/MainApp/MainApp';
import PollStore from './store/PollStore';

const pollStore = new PollStore();

const App = () => (
  <div className="app-container">
    <AppHeader />
    <MainApp store={pollStore} />
  </div>
);

App.displayName = 'App';

App.propTypes = {};

export default App;
