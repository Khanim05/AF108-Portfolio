import React from 'react';
import Services from '../services/Services';
import { FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import '../service/Service.css'
const Service = () => {
  const services = [
    {
      icon: <FaShoppingCart />,
      name: 'E-Commerce',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      icon: <FaDesktop />,
      name: 'Responsive Design',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      icon: <GrSecure />,
      name: 'Web Security',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
  ];

  return (
    <div className='service_area'>
      {services.map((service) => (
        <Services icon={service.icon} name={service.name} descr={service.descr} />
      ))}
    </div>
  );
};

export default Service;
