import "./gallery.css"
import { useEffect, useState } from "react";
import { fetchGalleryItems } from "../../services/gallery";
import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems()
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <GalleryItem
              key={`item-${i}`}
              className="gallery-item"
              iconPath={item.icon}
              companyName={item.company}
              desc={item.description}
              imagePath={item.image}
            />
          ))
        ) : (
          <p className="not-found">Someting went wrong on our side</p>
        )}
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <GalleryItem
              key={`item-clone-${i}`}
              className="gallery-item"
              iconPath={item.icon}
              companyName={item.company}
              desc={item.description}
              imagePath={item.image}
            />
          ))
        ) : <p className="not-found">No gallery items found</p>}
      </div>
    </div>
  )
}

export default Gallery
