import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER
} from "./types";

export interface IAction {
  type: string,
  payload?: {}
}

export type IAlert = {
  text: string
} | null

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