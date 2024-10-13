import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
  const { van } = useOutletContext();
  // const typeToUpperCase = van.type.charAt(0).toUpperCase() + van.type.slice(1);
  const typeCapital = van.type ? van.type.charAt(0).toUpperCase() + van.type.slice(1) : '';
  return (
    <div className="host-van-info-container">
      <h4>
        <strong>Name:</strong>
        <span style={{fontWeight: 'normal'}}> {van.name}</span>
      </h4>
      <h4>
        <strong>Category:</strong>
        <span style={{fontWeight: 'normal'}}> {typeCapital}</span>
      </h4>
      <h4>
        <strong>Description:</strong>
        <span style={{fontWeight: 'normal'}}> {van.description}</span>
      </h4>
      <h4>
        <strong>Visibility:</strong>
        <span style={{fontWeight: 'normal'}}> Public</span>
      </h4>
    </div>
  );
}
