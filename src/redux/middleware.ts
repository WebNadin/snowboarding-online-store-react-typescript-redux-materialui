import {CREATE_COMMENT} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleware({dispatch}: {dispatch: any}) {
  return function (next: any) {
    return function (action: any) {
      if (action.type === CREATE_COMMENT){
          const found = forbidden.filter(word => action.payload.body.includes(word));
          if (found.length){
              return dispatch(showAlert("Вы ввели недопустимое слово."));
          }
      }
      return next(action);
    }
  }
}