

import { Link } from "react-router-dom";




const Items = ({ id, src, alt, title, description, category , price}) => {
  return (
    <div className="card">
      <Link to={`/item/${id}`}>
        <img src={src} className="card-img-top img-fluid" alt="Card-img" />
      </Link>
      <div className="card-body">
        <h5 className="card-title card-title-modify">{title}</h5>
        <div className="text-center">
          <Link to={`/item/${id}`}>
            <button type="button" className="itemBuyButton text-center">
              <span className="span-button">Detalle</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;