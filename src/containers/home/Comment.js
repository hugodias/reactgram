import React from 'react';

const Comment = props => (
  <div>
    <div className="Comment-author">{props.author}</div>
    <div className="Comment-message">{props.message}</div>
  </div>
);

export default Comment;
