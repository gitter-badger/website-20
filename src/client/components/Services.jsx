import React from "react";

export class Services extends React.Component {
  render () {
    return (
      <section id="services">
        <div className="services-container content">
           <h1>
             {this.props.servicesList}
           </h1>
        </div>
      </section>
    );
  }
}
