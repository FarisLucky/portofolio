import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {
        return (
            <div className="card-custom">
              <img src={this.props.items.img} />
              <h4 className="service-heading">{this.props.items.heading}</h4>
              <p className="text-muted">{this.props.items.subheading}</p>
            </div>
        )
    }
}
