import React from 'react';
import CommentItem from "./CommentItem";

const CommentList = ({comments}) => {
    return (
        <div>
            {comments.map((comment , i) => (
               <CommentItem key={comment.id} comment={comment} number={i+1}/>
            ))}
        </div>
    );
};

export default CommentList;