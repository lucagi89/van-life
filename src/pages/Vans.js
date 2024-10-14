import VanCard from './VanCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
        <button
          onClick={() => setSearchParams({type: 'simple'})}
          className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
            Simple
        </button>
        <button
          onClick={() => setSearchParams({type: 'luxury'})}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
            Luxury
        </button>
        <button
          onClick={() => setSearchParams({type: 'rugged'})}
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
            Rugged
        </button>

        { typeFilter ?
        <button
          onClick={() => setSearchParams({})}
          className='van-type clear-filters'>Clear filters
        </button>
        : null }

      </div>
      <div className='vans-list'>
  {filteredVans.map(van => <VanCard key={van.id} state={{search: `?type=${typeFilter}`}} {...van} />)}
      </div>
    </div>
  )
}
