import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVan } from "../../api";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { id } = useParams()
  // const {name, price, imageUrl, type} = currentVan ? currentVan : {}


  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getVan(id)
            setCurrentVan(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadVans()
}, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={{message: error}} />
  }

  const { name, price, imageUrl, type } = currentVan ? currentVan : {}

  let typeColor = (
    type === 'simple' ? 'orange' :
    type === 'luxury' ? 'black' :
    type === 'rugged' ? 'green' : ""
  )

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
      <Outlet context={{ currentVan }}/>
    </div>
  )
}
