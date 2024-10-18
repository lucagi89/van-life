import { Link } from "react-router-dom"
import '../../style/App.css'

export default function HostVanCard(props) {
  const {id, name, price, imageUrl } = props.van

  return (
    <div className='host-van-card'>
      <Link to={id} className='host-van-card-link'
      aria-label={`View details for ${name},
      priced at $${price} per day`}
      >

        <img src={imageUrl} alt={name} className="host-van-card-image"/>

      <div className='host-van-card-info'>
          <h3>{name}</h3>

        <p>£{price}<br></br>/day</p>
      </div>
      </Link>
    </div>
  )
}
