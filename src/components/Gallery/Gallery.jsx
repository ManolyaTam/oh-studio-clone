import { list } from "../../services/gallery"
import "./gallery.css"

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {list.map((item, i) => (
          <div key={`item-${i}`} className="gallery-item">
            {item.id}
          </div>
        ))}
        {list.map((item, i) => (
          <div key={`item-clone-${i}`} className="gallery-item">
            {item.id}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
