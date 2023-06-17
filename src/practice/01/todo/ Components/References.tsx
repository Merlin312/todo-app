// import React, { Component } from 'react';

// export default class References extends Component {
//   constructor(props) {
//     super(props);

//     this.cdRef = null;
//     this.setCbRef = (el) => {
//       this.cdRef = el;
//     };

//     // this.inputReference = React.cr eateRef();
//   }
//   componentDidMount() {
//     // this.inputReference.current.focus();
//     this.cdRef.focus();
//     console.log(this.inputReference);
//   }
//   handleClick = () => {
//     // alert(this.inputReference.current.value);
//     alert(this.cdRef.value);
//   };
//   render() {
//     return (
//       <div>
//         <h1>Змінюємо світ</h1>
//         {/* <input ref={this.inputReference} placeholder="напишіть ваш текст..." /> */}
//         <input ref={this.setCbRef} placeholder="напишіть ваш текст..." />

//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     );
//   }
// }
