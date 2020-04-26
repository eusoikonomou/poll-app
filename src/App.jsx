import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import MainApp from './Containers/MainApp/MainApp';

const App = () => (
  <div className="app-container">
    <AppHeader/>
    <MainApp/>
  </div>
);

App.displayName = 'App';

App.propTypes = {};

export default App;
