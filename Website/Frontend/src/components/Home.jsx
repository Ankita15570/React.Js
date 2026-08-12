const products = [
  { id: 1, name: "T-Shirt", price: 299, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=200", category: "Clothing" },
  { id: 2, name: "Sneakers", price: 999, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=200", category: "Footwear" },
  { id: 3, name: "Backpack", price: 799, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", category: "Bags" },
  { id: 4, name: "Sunglasses", price: 499, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200", category: "Accessories" },
  { id: 5, name: "Watch", price: 1299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", category: "Accessories" },
  { id: 6, name: "Water Bottle", price: 349, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200", category: "Sports" },
];

function Home() {
  return (
    <div className="home-page">
      <div className="hero-banner">
        <h2>Welcome to SGM Store 🛒</h2>
        <p>Best deals on Electronics, Books & Accessories</p>
      </div>
      <h3 className="section-title">Featured Products</h3>
      <div className="shop-grid">
        {products.map((product) => (
          <div className="shop-card" key={product.id}>
            <span className="shop-badge">{product.category}</span>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="shop-price">₹{product.price.toLocaleString()}</p>
            <button className="buy-btn" onClick={() => alert(`"${product.name}" cart mein add ho gaya! 🛒`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
