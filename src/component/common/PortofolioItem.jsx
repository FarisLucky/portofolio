import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortofolioItem extends Component {
    render() {
        return (
            <div className="row py-5">
                <div className="col-sm-6 text-center">
                    <img src={this.props.data.img} className="img-port" />
                </div>
                <div className="col-sm-4">
                    <h3 className="port-title d-block">{this.props.data.title}</h3>
                    <p className="custom-detail">
                    {this.props.data.text}
                    <br/>
                    <br/>
                    <Link className="detail" to="/">Lihat selengkapnya...</Link>
                    </p>
                    <img src={this.props.data.item} className=""/>
                </div>
            </div>
        )
    }
}
