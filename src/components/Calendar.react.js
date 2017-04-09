
import React from 'react';

import { apiRoot } from '../constants';

import Month from './Month';

const Calendar = React.createClass({

  getInitialState: function() {
    return {
      calendar: {
        name: '',
        events: [ ],
      },
    };
	},

  componentDidMount: function() {
    fetch(`${apiRoot}/calendar/${this.props.calendarId}`)
    	.then((response) => response.json())
    	.then((calendar) => {
      	this.setState(calendar);
    	});
  },

  render: function() {
    return (
      <div className="component-calendar">

        <div className="title-bar">
          {this.state.name}
        </div>

        {this.props.mode == 'month' ?
        	<Month calendar={this.state.calendar} date={new Date()} />
         : null}

      </div>
    );
	},

})
export default Calendar;
