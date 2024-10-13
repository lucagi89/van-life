import VanCard from './VanCard'
import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = useState([])

  const [searchParams, setSearchParams]  = useSearchParams()
  const typeFilter = searchParams.get('type')

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
      <div className="van-list-filter-buttons">
        <Link to='?type=simple' className='van-type simple'>Simple</Link>
        <Link to='?type=luxury' className='van-type luxury'>Luxury</Link>
        <Link to='?type=rugged' className='van-type rugged'>Rugged</Link>
        <Link to='.' className='van-type clear-filters'>Clear filters</Link>

      </div>
      <div className='vans-list'>
        {filteredVans.map(van => <VanCard key={van.id} {...van} />)}
      </div>
    </div>
  )
}
