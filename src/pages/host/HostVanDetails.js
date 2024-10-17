import { useOutletContext } from "react-router-dom";
import { Loading } from "../../components/Loading";

export default function HostVanDetails() {
  const { currentVan } = useOutletContext();

  if (!currentVan) {
    return <Loading />;
  }

  const { name, type, description } = currentVan;
  const typeCapital = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';

  return (
    <div className="host-van-info-container">
      <h4>
        <strong>Name:</strong>
        <span style={{fontWeight: 'normal'}}> {name}</span>
      </h4>
      <h4>
        <strong>Category:</strong>
        <span style={{fontWeight: 'normal'}}> {typeCapital}</span>
      </h4>
      <h4>
        <strong>Description:</strong>
        <span style={{fontWeight: 'normal'}}> {description}</span>
      </h4>
      <h4>
        <strong>Visibility:</strong>
        <span style={{fontWeight: 'normal'}}> Public</span>
      </h4>
    </div>
  );
}
