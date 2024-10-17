import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <div className="host-van-info-container">
      <img src={currentVan.imageUrl} alt="van" />
    </div>
  );
}
