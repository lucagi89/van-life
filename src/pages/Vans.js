import VanCard from './VanCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = useState([])

  const [searchParams, setSearchParams]  = useSearchParams()
  const typeFilter = searchParams.get('type')
  console.log(typeFilter)

  const filteredVans = vans && typeFilter ?
    vans.filter(van => van.type === typeFilter) : vans


  useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])

  return (
    <div className='content-vans'>
      <h1>Explore our van options</h1>
      <div className='vans-list'>
        {filteredVans.map(van => <VanCard key={van.id} {...van} />)}
      </div>
    </div>
  )
}
