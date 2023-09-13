import { memo } from "react";
import { Link } from "react-router-dom";

function RenderHostVans({ data }) {
  return (
    <>
      {data.map((van) => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
export default memo(RenderHostVans);
