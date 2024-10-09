export default function VanCard(props) {
  const {id, name, price, imageUrl, type } = props
  return (
    <div className='van-card'>
        <img src={imageUrl} alt={name} className="van-card-image"/>

      <div className='van-card-info'>
        <div>
          <h2>{name}</h2>
          <p>{type}</p>
        </div>
        <p>{price}<br></br>/day</p>
      </div>
    </div>
  )
}
