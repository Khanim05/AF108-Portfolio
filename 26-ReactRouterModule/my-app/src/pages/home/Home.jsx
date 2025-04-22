import React from 'react'
import Main from '../../component/main/Main'
import Featureds from '../../component/featureds/Featureds'
import Plans from '../../component/plans/Plans'
import Maintitle from '../../component/maintitle/Maintitle'
import Customers from '../../component/customers/customers'
import Inputs from '../../component/inputs/Inputs'
import Footer from '../../component/footer/Footer'
const Home = () => {
  return (
    <div>
      <Main/>
      <Featureds/>
      <Maintitle/>
      <Plans/>
      <Customers/>
      <Inputs/>
      <Footer/>
    </div>
  )
}

export default Home
