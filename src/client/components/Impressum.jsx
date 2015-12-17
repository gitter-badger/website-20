import React from 'react';

export class Impressum extends React.Component {
  render () {
    return (
      <section>
        <div className="impressum-container content">
          <h1>
            {this.props.impressumMsg}
          </h1>
        </div>
      </section>
    );
  }
}
