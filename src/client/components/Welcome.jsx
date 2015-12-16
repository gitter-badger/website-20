import React from 'react';

export class Welcome extends React.Component {
  render () {
    return (
      <div className="welcomeContainer">
        <h1>
          {this.props.welcomeMsg}
        </h1>
      </div>
    );
  }
}
