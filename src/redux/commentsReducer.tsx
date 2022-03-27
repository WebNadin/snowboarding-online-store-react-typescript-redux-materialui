import {CREATE_COMMENT, FETCH_COMMENTS} from "./types";

export interface IAction {
    type: string,
    payload?: {}
}

const initialState = {
    comments: [],
    fetchedComments: [],
}

export const commentsReducer = (state= initialState, action: IAction) => {
    switch (action.type) {
        case CREATE_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        case FETCH_COMMENTS:
            return {...state, fetchedComments:  action.payload}
        default:
            return state;
    }
}