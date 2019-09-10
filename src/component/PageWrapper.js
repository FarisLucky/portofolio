import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Logo from '../component/assets/images/logo.png';
class PageWrapper extends Component {
  
  render(){
    
    return(
      <div className="Web-Custom" id="mainCustom">
        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger ml-5" to="#page-top"><img src={Logo} width="110px" /></Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse offset" id="navbarResponsive">
              <ul className="navbar-nav ml-auto justify-content-end navbar-custom">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#team">Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
export default PageWrapper;