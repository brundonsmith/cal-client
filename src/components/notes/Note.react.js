
import React from 'react';
import marked from 'marked';

const Day = React.createClass({

  getInitialState: function() {
    return {
      note: { },
    };
	},

  render: function() {
    return (
      <div className={`component-note`}>
        <div className="title">{this.props.note.title}</div>
        {this.props.note.isMarkdown
          ? <div className="body" __dangerouslySetInnerHtml={{ html: marked(this.props.note.body) }}></div>
          : <div className="body">{this.props.note.body}</div>}
      </div>
    );
	},

})
export default Day;
