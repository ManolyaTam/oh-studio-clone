import "./carosel.css";
import { caroselItems as items } from "../../services/carosel";
import CaroselItem from "../CaroselItem/CaroselItem";

function Carosel() {
  return (
    <div className="carosel-container">
      <div className="carosel">
        {items && items.length > 0 ? (
            items.map((item, i) => (
              <CaroselItem
                key={`item-${i}`}
                className="gallery-item"
                iconPath={item.icon}
                companyName={item.company}
                desc={item.description}
                imagePath={item.image}
              />
            ))
          ) : (
            <p className="not-found">Someting went wrong, no items found</p>
          )}
      </div>
    </div>
  )
}

export default Carosel