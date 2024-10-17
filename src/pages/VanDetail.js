import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVans } from "../api";

export default function VanDetail() {
  const idParams = useParams()
  const id = idParams.id
  const [van, setVan] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {name, price, imageUrl, type, description} = van

  let typeColor = (
    type === 'simple' ? 'orange' :
    type === 'luxury' ? 'black' :
    type === 'rugged' ? 'green' : ""
  )

  const search = useLocation().state?.search || ''
  const queryType = useLocation().state?.type || 'All'
  const queryTypeCapitalized = queryType.charAt(0).toUpperCase() + queryType.slice(1)


  useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getVans(id)
            setVan(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    loadVans()
}, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <div className='van-page'>
      <Link
        to={`..?${search}`}
        relative="path"
        className='back-link' >
        {"<-"} Back to {queryTypeCapitalized} Vans
      </Link>

      <div className="van-details">
        <img src={imageUrl} alt={`${name}`} className="van-image"/>

      <div className='van-info'>
      <p className={`badge background-${typeColor}`}>{type}</p>
        <div>
          <h2>{name}</h2>
          {/* <p className={`badge background-${typeColor}`}>{type}</p> */}
        </div>
        <p>£{price}<br></br>/day</p>
        <p>{description}</p>
      </div>
      </div>
    </div>
  )
}
