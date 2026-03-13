import "./ProductCard.css";

function ProductCard({ title, price, image, category, rating, description }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <div className="card-content">

        <span className="category">{category}</span>

        <h3>{title}</h3>

        <p className="description">{description}</p>

        <div className="rating">⭐ {rating}</div>

        <p className="price">${price}</p>

        <button>Add to Cart</button>

      </div>

    </div>
  );
}

export default ProductCard;