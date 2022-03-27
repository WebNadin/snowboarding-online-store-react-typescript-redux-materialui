import React from 'react'
import {connect} from "react-redux";
import {createComment, showAlert} from "../redux/actions";
import {Alert} from "./Alert";
import {IAlert, IState} from "./FetchedComments";


interface Props {
  createComment: ({}) => {},
  showAlert: (arg0: string) => void,
  alert: IAlert
}

interface State {
  text: string
}

class FormComment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  submitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const { text } = this.state;

    if (!text.trim()){
        return this.props.showAlert('Текст комментария не заполнен.');
    }

    const newComment = {
      body: text,
      id: Date.now().toString(),
    };
    this.props.createComment(newComment);
    this.setState({text: ""});
  }

  changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState( (prevState: Readonly<State>) => ({...prevState, ...{
        [event.target.name]: event.target.value
      }})
    )
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert}/>}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Заголовок комментария</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.text}
            name="text"
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit" className="btn btn-success">Создать</button>
      </form>
    )
  }
}

const matDispatchToProps = {
  createComment,
  showAlert
}

const mapStateToProps = (state: IState) => {
  return {
    alert: state.appReducer.alert
  }
}

export default connect(mapStateToProps, matDispatchToProps)(FormComment);