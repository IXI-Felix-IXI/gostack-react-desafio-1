import React from 'react';
import './chatComment.css';

function Comment (props) {
  return(
    <div className="comment">
     <img src={props.data.author.avatar} alt={props.data.author.name} />
     <p>{props.data.content}</p>
    </div>
  )
};

export default Comment;