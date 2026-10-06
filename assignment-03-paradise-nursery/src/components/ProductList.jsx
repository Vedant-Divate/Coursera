import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice.jsx';
import plants, { categories } from '../data/plants.js';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <h1>Our Plants</h1>
      <p className="subtitle">Choose from {plants.length} nursery-fresh houseplants.</p>
      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => {
                const added = cartIds.has(plant.id);
                return (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-thumb" />
                    <h3>{plant.name}</h3>
                    <p className="plant-desc">{plant.description}</p>
                    <p className="plant-price">${plant.price}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                      className={added ? 'added' : ''}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
