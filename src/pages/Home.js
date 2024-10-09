import { Link } from "react-router-dom";

export default function Home() {
  return (
  <div className='content-home'>

    <h1>You got the plans, we got the vans</h1>
    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    {/* <button>Find your Van</button> */}
    <Link to="/vans" className="button-home">Find your Van</Link>

  </div>
  )
}
