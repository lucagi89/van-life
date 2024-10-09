import VanCard from './VanCard'
import { useEffect, useState} from 'react'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
}, [])

  console.log(vans[0])

  return (
    <div className='content-vans'>
      {/* <div className='vans-hero'>
        <h1>Our Vans</h1>
        <p>Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
            <br/><br/>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className='vans-bottom'>
        <p>Your destination is waiting.<br/>
        Your van is ready.</p>
        <button>Explore our Van</button>
      </div> */}
      <div className='vans-list'>
        {vans.map(van => <VanCard key={van.id} {...van} />)}
      </div>
    </div>
  )
}
