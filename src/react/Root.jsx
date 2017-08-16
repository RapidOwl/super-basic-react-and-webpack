import React from 'react';
import Animal from './Animal.jsx';

export default class Root extends React.Component {
  constructor() {
    super();

    this.state = { animal: 'Horse', showDetail: true };
  }

  render() {
    return (
      <div className="content-wrapper">
        <Animal animal={this.state.animal} showDetail={this.state.showDetail} />
      </div>
    );
  }
}
