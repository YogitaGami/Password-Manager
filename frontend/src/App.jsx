import { useState } from 'react'
import Manager from './component/Manager'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='min-h-[92vh] absolute top-10 z-[-2] w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(85,200,28,.5)_100%)]'>
        <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App
