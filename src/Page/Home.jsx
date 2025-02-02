import React from 'react'
import Slider from '../Components/Slider'
import About from '../Components/About'
import Filter from '../Components/Filter'
import NewSell from './NewSell'
import Tranding from './Tranding'

const Home = () => {
  return (
    <div >
      <Slider />
      <About />
      <Filter />
      <NewSell />
      <Tranding />
    </div>
  )
}

export default Home
