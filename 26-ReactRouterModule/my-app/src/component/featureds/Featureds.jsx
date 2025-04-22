import React from 'react'
import Featured from '../featured/Featured'
import { BsCollection } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import styles from '../featureds/featureds.module.css'

const Featureds = () => {
    let product=[
        {
            icon:<BsCollection />,
            title:"Featured title",
            desc:"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
            text:"Call to action -->"
        },
        {
            icon:<FaBuilding />,
            title:"Featured title",
            desc:"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
            text:"Call to action -->"
        },
        {
            icon:<BsToggles />,
            title:"Featured title",
            desc:"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
            text:"Call to action -->"
        }
        
    ]
  return (
    <div className={`${styles.product_area} container`}>
      {product.map((product,index)=>{ 
      return(
        <Featured
        key={index}
        icon={product.icon}
        title={product.title}
        desc={product.desc}
        text={product.text}
        />
      );
    })}
    </div>
  );
};

export default Featureds
