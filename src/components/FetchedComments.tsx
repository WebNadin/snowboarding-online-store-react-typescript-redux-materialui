import React from 'react'
import Comment, {IComment} from "./Comment";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../redux/actions";
import {IAppState} from "../redux/appReducer";
import {Loader} from "./Loader";

interface IFetchedComments {
  fetchedComments: []
}

export type IAlert = {
  text: string
} | null

export interface IState {
  commentsReducer: IFetchedComments,
  appReducer: IAppState,
  alert: IAlert
}

const FetchedComments = ( ) => {
  const dispatch = useDispatch();
  const comments = useSelector( (state: IState) => {
    return state.commentsReducer.fetchedComments;
  })

  const loading = useSelector( (state: IState) => {
    return state.appReducer.loading
  })
  if (loading){
      return <Loader />
  }

  if (!comments.length){
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchComments())}
    >Загрузить</button>
  }
  return (
    <div className="comments">
      {comments.map((comment: IComment) => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
}

export default FetchedComments;