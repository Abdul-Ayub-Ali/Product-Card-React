import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
    return (
        <div className="container">
            <h1 className="title">Product Page</h1>

            <div className="product-grid">
                {products.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            rating={item.rating}
                            description={item.description}
                        />
          );
                })}
            </div>
        </div>
    );
}

export default App;