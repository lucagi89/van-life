import HostVanCard from "./HostVanCard";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
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



  const hostVansLoop = vans && vans.map((van) => {
    return (<HostVanCard key={van.id} van={van} />)
  })

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
