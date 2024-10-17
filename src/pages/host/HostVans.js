import HostVanCard from "./HostVanCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../style/App.css';
import { getHostVans } from "../../api";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export default function HostVans() {

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


 useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getHostVans()
            setVans(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    loadVans()
}, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={{message: error}} />
  }



  const hostVansLoop = vans && vans.map((van) => (
    <div className='host-van-card'>
      <Link to={van.id} className='host-van-card-link'
      aria-label={`View details for ${van.name},
      priced at $${van.price} per day`}
      >

        <img src={van.imageUrl} alt={van.name} className="host-van-card-image"/>

      <div className='host-van-card-info'>
          <h3>{van.name}</h3>

        <p>£{van.price}<br></br>/day</p>
      </div>
      </Link>
    </div>)
  )

  return (
    <div className="host-vans-container">
      <h2>Host Vans Page</h2>
      <div className="host-vans-list">
        {
          vans ? hostVansLoop : <h3>Oops...No Vans Uploaded</h3>
        }
      </div>
    </div>
  );
}
