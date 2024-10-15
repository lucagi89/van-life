
import { Link } from "react-router-dom"

export default function VanCard(props) {
  const {id, name, price, imageUrl, type, state } = props
  let typeColor = (
    type === 'simple' ? 'orange' :
    type === 'luxury' ? 'black' :
    type === 'rugged' ? 'green' : ""
  )
  return (
    <div className='van-card'>
      <Link
        to={id}
        state={state}
        className='van-card-link'
        aria-label={`View details for ${name},
      priced at $${price} per day`}
      >

        <img src={imageUrl} alt={name} className="van-card-image"/>

      <div className='van-card-info'>
        <div>
          <h3>{name}</h3>
          <p className={`badge background-${typeColor}`}>{type}</p>
        </div>
        <p>£{price}<br></br>/day</p>
      </div>
      </Link>
    </div>
  )
}
