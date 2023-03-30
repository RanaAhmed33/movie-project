import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Sidecart from './components/Sidecart/Sidecart';

function App() {
  const [watchTime, setWatchTime] = useState('');

  const handleWatchTime = (time) => {

    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'))
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem('watchTime', sum)
      setWatchTime(sum)

    }
    else {
      localStorage.setItem('watchTime', time)
      setWatchTime(time)
    }


  }

  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <div className="main row  ">


        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime} ></Home>
        </div>

        <div className="sideCart col-md-4 card">
          <Sidecart watchTime={watchTime} ></Sidecart>
        </div>

      </div>

    </div>

  )
}

export default App
