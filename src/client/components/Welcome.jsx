import React from 'react';

export class Welcome extends React.Component {
  render () {
    return (
      <section id="welcome">
        <div className="welcome-container content">
          <h1>
            {this.props.welcomeMsg}
          </h1>
        </div>
      </section>
    );
  }
}
