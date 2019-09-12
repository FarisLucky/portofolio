import React, { Component } from "react";
import Carouselitem from "../../common/Carouselitem";

export default class Header extends Component{

    render(){
        return (
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Carouselitem />
              </div>
            </div>
          </div>
        </header>
        );
    }
}