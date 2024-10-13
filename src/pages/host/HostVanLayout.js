import { useParams, Link, NavLink, Outlet } from "react-router-dom";
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

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }


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
      <Link to=".." relative = 'path' className='back-link'> {"<-"} Back to My Vans</Link>

      <div className="host-van-details">
        <img src={imageUrl} alt={`${name}`} className="host-van-image"/>

      <div className='host-van-info'>
        <p className={`badge background-${typeColor}`}>{type}</p>

          <h3>{name}</h3>

        <p><strong>£{price}</strong>/day</p>
      </div>
      <nav>
      <NavLink to="."
          end
          style={({isActive}) => isActive ? activeStyle: null }>
          Details
        </NavLink>

        <NavLink to="pricing"
          style={({isActive}) => isActive ? activeStyle: null }>
          Pricing
        </NavLink>

        <NavLink to="photos"
          style={({isActive}) => isActive ? activeStyle: null }>
          Photos
        </NavLink>
      </nav>
      </div>
      <Outlet context={{ van }}/>
    </div>
  )
}
