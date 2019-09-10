import React, { Component } from 'react';
import pr1 from '../../assets/images/portofolio/pr1.png';
import item1 from '../../assets/images/item/item1.png';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'p_item':[{
                'img':pr1,
                'title':'Sistem Informasi Developer Properti',
                'text':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qfacilis nam sit doloremque illo cumque! Aut officia officiis voluptatum!',
                'item':item1
            }]
        }
    }
    
    render() {
        return (
            <div className="portfolio bg-second p-4">
                <div className="title">
                    <h2 className="text-center">{this.props.data.title}</h2>
                    <p className="text-center text-muted">{this.props.data.subtitle}</p>
                </div>
                <hr className="custom"/>
                <div className="body py-4">
                {this.state.p_item.map((val,index)=>{
                    return(
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={val.img} className="img-port" />
                            </div>
                            <div className="col-sm-5">
                                <h3 className="port-title d-block">{val.title}</h3>
                                <p className="custom-detail">
                                {val.text}
                                <br/>
                                <br/>
                                <Link className="detail" to="/">Lihat selengkapnya...</Link>
                                </p>
                                <img src={item1} className="float-right"/>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
