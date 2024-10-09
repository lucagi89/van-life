import VanCard from './VanCard'
import { useEffect, useState} from 'react'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])

  return (
    <div className='content-vans'>
      <h1>Explore our van options</h1>
      <div className='vans-list'>
        {vans.map(van => <VanCard key={van.id} {...van} />)}
      </div>
    </div>
  )
}
