import HostVanCard from "./HostVanCard";
import { useEffect, useState } from "react";
import '../../style/App.css';

export default function HostVans() {

  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }
  , []);

  return (
    <div className="host-vans-container">
      <h2>Host Vans Page</h2>
      <div className="host-vans-list">
        {hostVans.map((van) => (
          <HostVanCard key={van.id} {...van} />
        ))}
      </div>
    </div>
  );
}
