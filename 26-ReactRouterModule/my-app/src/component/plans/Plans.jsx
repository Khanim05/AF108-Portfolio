import React from 'react'
import Plan from '../plan/Plan'
import styles from '../plans/plans.module.css'
import { FaCheck } from "react-icons/fa";



const Plans = () => {
    let products=[
        {
         title:"FREE",
         price:"$0",
         icon:<FaCheck />,
         user:"1 users",
         icon1:<FaCheck />,
         storage:"5GB storage",
         icon2:<FaCheck />,
         project:"Unlimited public projects",
         icon3:<FaCheck />,
         community:"Community access",
         Unlimited:"Unlimited private projects",
         Dedicated:"  Dedicated support",
         Free:" Free Linked domain",
         Monthly :" Monthly status reports",
         btntext:"Choose a plan"
        },
        {
            title:"⭐PRO",
            price:"$9",
            icon:<FaCheck />,
            user:"5 users",
            icon1:<FaCheck />,
            storage:"5GB storage",
            icon2:<FaCheck />,
            project:"Unlimited public projects",
            icon3:<FaCheck />,
            community:"Community access",
            Unlimited:"  Unlimited private projects",
            Dedicated:"  Dedicated support",
            Free:"  Free Linked domain",
            Monthly :" Monthly status reports",
            btntext:"Choose a plan"
        },       {
            title:"ENTERPRISE",
            price:"$49",
            icon:<FaCheck />,
            user:"5 users",
            icon1:<FaCheck />,
            storage:"5GB storage",
            icon2:<FaCheck />,
            project:"Unlimited public projects",
            icon3:<FaCheck />,
            community:"  Community access",
            Unlimited:"  Unlimited private projects",
            Dedicated:"  Dedicated support",
            Free:" x Free Linked domain",
            Monthly :" x Monthly status reports",
            btntext:"Choose a plan"
        }

    ]
  return (
    <div className={styles.plans_area}>
      {
      products.map((item,index)=>{
        return(
            <Plan
            key={index}
            title={item.title}
            price={item.price}
            icon={item.icon}
            user={item.user}
            icon1={item.icon1}
            storage={item.storage}
            icon2={item.icon2}
            project={item.project}
            icon3={item.icon3}
            community={item.community}
            Unlimited={item.Unlimited}
            Dedicated={item.Dedicated}
            Free={item.Free}
            Monthly={item.Monthly}
            btntext={item.btntext}
            />
        )
      })
      }
    </div>
  )
}

export default Plans
