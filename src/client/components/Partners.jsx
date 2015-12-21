import React from 'react';

export class Partners extends React.Component {
  render () {
    return (
      <section id="partners">
        <div className="partners-container content">
          <h1>
            Partner
          </h1>
          <p>
            {this.props.partners}
          </p>
        </div>
      </section>
    );
  }
}
