
import { Link } from "react-router-dom"

export default function VanCard(props) {
  const {id, name, price, imageUrl, type } = props
  let typeColor = (
    type === 'simple' ? 'orange' :
    type === 'luxury' ? 'black' :
    type === 'rugged' ? 'green' : ""
  )
  return (
    <div className='van-card'>
      <Link to={`/vans/${id}`} className='van-card-link'>
        <img src={imageUrl} alt={name} className="van-card-image"/>

      <div className='van-card-info'>
        <div>
          <h2>{name}</h2>
          <p className={`badge background-${typeColor}`}>{type}</p>
        </div>
        <p>£{price}<br></br>/day</p>
      </div>
      </Link>
    </div>
  )
}
