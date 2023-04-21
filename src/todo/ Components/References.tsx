import React, { Component } from 'react';

export default class References extends Component {
  constructor(props) {
    super(props);
    this.inputReferences = React.createRef();
  }
  componentDidMount() {
    this.inputReferences.current.focus();
    console.log(this.inputReferences);
  }
  handleClick = () => {
    alert(this.inputReferences.current.value);
  };
  render() {
    return (
      <div>
        <h1>Змінюємо світ</h1>
        <input ref={this.inputReferences} placeholder="напишіть ваш текст..." />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
