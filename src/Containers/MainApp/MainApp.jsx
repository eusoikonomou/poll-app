import React from 'react';

import PollOptions from '../PollOptions';
import PollVote from '../PollVote';
import PollStats from '../PollStats';

const MainApp = () => (
  <div className="main-container">
    <PollOptions/>
    <PollVote/>
    <PollStats/>
  </div>
);

MainApp.displayName = 'MainApp';

export default MainApp;
