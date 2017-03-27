
import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './Calendar';

const App = React.createClass({
  render: function() {
    return (
      <div className="component-app">
        <Calendar calendarId="58d6b35c9d56d5e5b74a0cf0" mode="month" />
      </div>
    );
  },
})

ReactDOM.render(<App />, document.getElementById('root'));
