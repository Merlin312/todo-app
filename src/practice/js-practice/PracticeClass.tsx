import React, { Component } from 'react';

class PracticeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    const prom = new Promise((resolve, reject) => {
      const arr = [3, 5, 6, 2];
      if (arr.length > 0) {
        setTimeout(() => {
          resolve(arr);
        }, 3000);
      } else {
        reject('Масив пустий');
      }
    });

    prom
      .then((result) => {
        this.setState({ array: result });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        {array.map((ar, index) => (
          <li key={index}>{ar}</li>
        ))}
      </div>
    );
  }
}

export default PracticeClass;
