import "./gallery-item.css";
const apiPath = "http://localhost:3001"
const GalleryItem = ({ iconPath, companyName, desc, imagePath }) => {

  return (
    <div className="gallery-item">
      <div className="gallery-item-header">
        <img
          src={apiPath + iconPath}
          width={40}
          height={40}
          alt={`${companyName} icon`}
          className="gallery-item-icon"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder-img.png";
          }}
        />
        <div className="gallery-item-info">
          <h3 className="company-name">{companyName}</h3>
          {desc && <p className="description">{desc}</p>}
        </div>
      </div>
      <img
        src={apiPath + imagePath}
        width={40}
        height={40}
        alt={`${companyName}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder-img.png";
        }}
        className="gallery-item-image"
      />
    </div>
  );
};

export default GalleryItem;
