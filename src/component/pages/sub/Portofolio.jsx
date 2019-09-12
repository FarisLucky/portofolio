import React, { Component } from 'react';
import pr1 from '../../assets/images/portofolio/pr1.png';
import pr2 from '../../assets/images/portofolio/pr2.png';
import item1 from '../../assets/images/item/item1.png';
import PortofolioItem from '../../common/PortofolioItem';

export default class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'p_item':[{
                'img':pr1,
                'title':'Sistem Informasi Developer Properti',
                'text':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qfacilis nam sit doloremque illo cumque! Aut officia officiis voluptatum!',
                'item':item1
            },{
                'img':pr2,
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
                <div className="body">
                {this.state.p_item.map((val,index)=>{
                    return(
                        <PortofolioItem key={index} data={val} />
                    )
                })}
                </div>
            </div>
        )
    }
}
