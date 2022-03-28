import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_COMMENTS,
  SHOW_ALERT,
  SHOW_LOADER
} from "./types";
import {AppDispatch} from "../index";


export function createComment(comment: {}): {} {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}
export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text: string): any {
  return ({dispatch}:any) => {
    dispatch({
        type: SHOW_ALERT,
        payload: text
      }
    )

    setTimeout(() => {
        dispatch(hideAlert())
    }, 2000);
  }
}
export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchComments(): {} {
  return {
    type: REQUEST_COMMENTS
  }
  // return async (dispatch: ({}) => void) => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  //     const json = await response.json();
  //     dispatch({type: FETCH_COMMENTS, payload: json})
  //     dispatch(hideLoader());
  //   } catch (e) {
  //     dispatch(showAlert("Что-то пошло не так"));
  //     dispatch(hideLoader());
  //   }
  // }
}