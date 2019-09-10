import React, { Component } from 'react';
import Header from '../common/Header';
import Service from './sub/Service'
// Load Image
import Images from '../assets/images/home.png';
import Svc1 from '../assets/images/service/svc1.png';
import Svc2 from '../assets/images/service/svc2.png';
import Svc3 from '../assets/images/service/svc3.png';
import Svc4 from '../assets/images/service/svc4.png';
import Portfolio from './sub/Portfolio';

export default class Home extends Component {
  render() {
    // Data for Header.jsx
    const data_props = {
      'title':'Home',
      'subtitle':'Ayo belajar React Bersama-sama',
      'btn':'Gabung',
      'link':'/daftar',
      'showBtn':true,
      'img': Images
    };
    // Data for Service.jsx
    const data_service = {
      'title':'Services',
      'subtitle':'Lorem ipsum dolor sit amet consectetur.',
      'item':[{
        'img': Svc1,
        'heading':'WEB DEVELOP',
        'subheading':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eum vel aliquam neque tempora quidem.'
      },{
        'img': Svc2,
        'heading':'UI/UX DESIGN',
        'subheading':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eum vel aliquam neque tempora quidem.'
      },{
        'img': Svc3,
        'heading':'WEB DESIGN',
        'subheading':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eum vel aliquam neque tempora quidem.'
      },{
        'img': Svc4,
        'heading':'SEO OPTIMIZE',
        'subheading':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eum vel aliquam neque tempora quidem.'
      }]
    };
    // Data for portofolio.jsx
    const data_port = {
      'title':'Portofolio',
      'subtitle':'Lorem ipsum dolor sit amet consectetur '
    };
    return (
      <div>
        <Header data = {data_props} />
        <Service data={data_service} />
        <Portfolio data={data_port} />
      </div>
    )
  }
}
