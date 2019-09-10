import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/home.png";

export default class Header extends Component{

    render(){
        return (
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="text-left greeting pt-5">
                  <h2 className="text-uppercase text-center">Hi, Saya Faris</h2>
                  <small className="text-center">Orang Biasa yang suka Teknologiy</small>
                </div>
              </div>
              <div className="col-sm-5 offset-2">
                <div className="banner-greeting">
                  <img src={Image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </header>
        );
    }
}