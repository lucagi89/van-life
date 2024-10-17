
import { Link } from 'react-router-dom';
export function Error(props) {
  return (
    <div className='content-vans'>
      <h1 className='message' aria-live="assertive">Sorry...Something went wrong</h1>
      <p>{props.error.message}</p>
      <Link to='/' className='button-home'> 👈🏼 Go back to the Home Page</Link>
    </div>
  )
}
