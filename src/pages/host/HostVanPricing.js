import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <div className="host-van-info-container">
      <h4>
        £{currentVan.price}.00
          <span style={{fontWeight: 'normal'}}>/Day</span>
          </h4>

    </div>
  );
}
