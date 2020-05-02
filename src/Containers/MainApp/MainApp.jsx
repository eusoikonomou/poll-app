import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import PollOptions from '../PollOptions';
import PollVote from '../PollVote';
import PollStats from '../PollStats';
import './MainApp.scss';

const MainApp = observer(({ store }) => (
  <>
    <PollOptions store={store} />
    <PollVote store={store} />
    <PollStats store={store} />
  </>
));

MainApp.displayName = 'MainApp';

MainApp.propTypes = {
  store: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.bool,
  ])).isRequired,
};

export default MainApp;
