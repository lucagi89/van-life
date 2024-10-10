import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetail() {
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
      <Link to="/vans" className='back-link'> {"<-"} Back to All Vans</Link>

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
