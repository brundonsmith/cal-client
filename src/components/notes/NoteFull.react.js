
import React from 'react';
import marked from 'marked';

class NoteFull extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      note: { }
    };
	}

  render() {
    return (
      <div className={`component-note-full`}>
        {this.props.note.isMarkdown
          ? <div className="content" __dangerouslySetInnerHtml={{ html: marked(this.props.note.content) }}></div>
          : <div className="content">{this.props.note.content}</div>}
      </div>
    );
	}

}
export default NoteFull;
