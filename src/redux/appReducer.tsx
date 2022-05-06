import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";
import {IAction, IAlert} from "./actions";

export interface IAppState {
    loading: boolean,
    alert: IAlert
}

const initialState = {
    loading: false,
    alert: null
}

export const appReducer = (state: IAppState = initialState, action: IAction): {} => {
    switch (action.type){
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        default:
          return state
    }
}