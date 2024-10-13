import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <div className="host-van-info-container">
      <h4>
        £{van.price}.00
          <span style={{fontWeight: 'normal'}}>/Day</span>
          </h4>

    </div>
  );
}
