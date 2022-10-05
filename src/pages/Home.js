import React from 'react'
// componetns
import Hero from '../components/Hero';
import Cart from '../components/Cart';
import Filter from '../components/filters/Filter';

const Home = () => {
  return (
    <div className='max-w-[1536px] bg-white'>
      <Hero />
      <Filter/>
      <Cart />
    </div>
  )
}

export default Home;