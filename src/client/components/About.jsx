import React from 'react';

export class About extends React.Component {
  render() {
    return (
      <section>
        <div className="about-container content">
          <h1>
            {this.props.aboutMsg}
          </h1>
        </div>
      </section>
    );
  }
}
