import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='text-center'>
        <h2>Welcome to pos</h2>
      <Link to='/products' className='btn btn-primary'>Go TO</Link>
    </div>
  )
}

export default Home
