import React from 'react';

const Services = ({ icon, name, descr }) => {
  return (
    <div>
      <div className='icon_area'>{icon}</div>
      <h2 className='name_area'>{name}</h2>
      <p className='desc_area'>{descr}</p>
    </div>
  );
};

export default Services;
