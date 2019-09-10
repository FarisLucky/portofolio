import React, { Component } from 'react'
import ServiceItem from '../../common/ServiceItem';

export default class Service extends Component {
    render() {
        return (
            <section className="page-section" id="services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">{this.props.data.title}</h2>
                    <p className="section-subheading text-muted">{this.props.data.subtitle}</p>
                  </div>
                </div>
                <hr className="custom" />
                <div className="row">
                {this.props.data.item ?                
                  this.props.data.item.map((item, index)=>{
                    return (
                      <div className="col-sm-3" key={index}>
                        <ServiceItem key={index} items={item} />
                      </div>
                    ) 
                  })
                  : <h1 className="text-center">Service Kosong</h1>
                }
                </div>
              </div>
            </section>
        )
    }
}
