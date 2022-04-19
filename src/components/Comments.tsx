import React from 'react'
import Comment, {IComment} from "./Comment";
import {connect} from "react-redux";

const Comments = ({ syncComments }: any ) => {
  console.log('syncComments = ',syncComments);
  if (!syncComments.length){
      return <p>Здесь пока нет комментариев.</p>
  }
  return (
    <div className="comments">
      {syncComments.map((comment: IComment) => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
}


interface CommentsReducer {
  comments: [],
  fetchedComments: [],
}
interface State {
  commentsReducer: CommentsReducer
}

const mapStateToProps = (state: State) => {
  console.log(state);
  console.log('state.commentsReducer.comments = ',state.commentsReducer.comments);
    return {
      syncComments: state.commentsReducer.comments
    }
}

export default connect(mapStateToProps, null)(Comments);