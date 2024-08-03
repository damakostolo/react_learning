import React from 'react';

const CommentItem = (props) => {
    return (
        <div>
            <strong>{props.number}. {props.comment.name}</strong>
            <div>{props.comment.body}</div>
        </div>
    );
};

export default CommentItem;