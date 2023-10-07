import "./cardGallery.scss";

export default function CardGallery({ title, bg }) {
  return (
    <div className="card-gallery" style={{ backgroundImage: `url(${bg})` }}>
      {title}
    </div>
  );
}
