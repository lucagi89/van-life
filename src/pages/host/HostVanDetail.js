import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostVanDetail() {
  const idParams = useParams()
  const id = idParams.id
  const [van, setVan] = useState({})
  const {name, price, imageUrl, type, description} = van

  let typeColor = (
    type === 'simple' ? 'orange' :
    type === 'luxury' ? 'black' :
    type === 'rugged' ? 'green' : ""
  )


  useEffect(function() {
    fetch(`/api/vans`)
        .then(res => res.json())
        .then(data => {
          const van = data.vans.find(van => van.id === id)
          setVan(van)
        })
  }
  , [])


  return (
    <div className='van-page'>
      <Link to="/host/vans" className='back-link'> {"<-"} Back to My Vans</Link>

      <div className="host-van-details">
        <img src={imageUrl} alt={`${name}`} className="host-van-image"/>

      <div className='host-van-info'>
        <p className={`badge background-${typeColor}`}>{type}</p>

          <h3>{name}</h3>

        <p><strong>£{price}</strong>/day</p>
      </div>
      </div>
      <div className="van-specifics">
        <p>{description}</p>
      </div>
    </div>
  )
}
