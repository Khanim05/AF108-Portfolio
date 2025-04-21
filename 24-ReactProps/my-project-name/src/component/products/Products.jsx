
import React from 'react';
import Product from '../product/Product';
import  '../products/products.css'

const Products = () => {
  const products = [
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg',
      name: 'Threads',
      descr: 'Illustration',
    },
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg',
      name: 'Explore',
      descr: 'Graphic Design',
    },
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg',
      name: 'Finish',
      descr: 'Identity',
    },
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg',
      name: 'Lines',
      descr: 'Branding',
    },
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg',
      name: 'Southwest',
      descr: 'Website Design',
    },
    {
      image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg',
      name: 'Window',
      descr: 'Photography',
    },
  ];

  return (
    <div className="product_area">
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            image={product.image}
            name={product.name}
            desc={product.descr}
          />
        );
      })}
    </div>
  );
};

export default Products;


