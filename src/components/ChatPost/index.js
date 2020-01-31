import React from 'react';
import './chatPost.css';

import Comment from '../ChatComment/index';

function Post (props) {
  return(
    <div className="post">
      <div className="user-info">
        <img src={props.data.author.avatar} alt={props.data.author.name} />
        <div className="user-detail">
          <strong>{props.data.author.name}</strong>
          <span>{props.data.date}</span>
        </div>
      </div>
      <p className="post-question">{props.data.content}</p>
      <hr></hr>

      {props.data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      
    </div>
  )
};

export default Post;