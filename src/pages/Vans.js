import VanCard from './VanCard'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../api.js'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'

export default function Vans() {
  const [vans, setVans] = useState([])

  const [searchParams, setSearchParams]  = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const typeFilter = searchParams.get('type')

  const filteredVans = vans && typeFilter ?
    vans.filter(van => van.type === typeFilter) : vans
  const searchQuery = searchParams ? searchParams.toString() : ''

  useEffect(function() {
    async function fetchVans() {
      setLoading(true)
      try {
        const vans = await getVans()
        setVans(vans)
      } catch (error) {
        setError(error)
      }finally {
        setLoading(false)
      }
    }
    fetchVans()

  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={{message: error}} />
  }



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
        {filteredVans.map(van =>
          <VanCard
            key={van.id}
            state={{search: searchQuery, type: typeFilter}} {...van} />
          )}
      </div>
    </div>
  )
}
