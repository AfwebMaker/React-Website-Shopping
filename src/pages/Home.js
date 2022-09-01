import React from 'react'
// componetns
import Hero from '../components/Hero';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className='max-w-[1536px] bg-white'>
      <Hero />
      <Cart />
    </div>
  )
}

export default Home;