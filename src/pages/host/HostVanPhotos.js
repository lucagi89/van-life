import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div className="host-van-info-container">
      <img src={van.imageUrl} alt="van" />
    </div>
  );
}
