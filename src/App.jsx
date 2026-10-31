import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000';

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/orders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load orders.');
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
      })
      .catch((loadError) => {
        setError(loadError.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <h1>Flower Orders</h1>
      {loading && <p className="status">Loading orders...</p>}
      {!loading && error && <p className="status">{error}</p>}
      {!loading && !error && orders.length === 0 && (
        <p className="status">No orders found.</p>
      )}
      {!loading &&
        !error &&
        orders.map((order, index) => (
          <article className="order-card" key={index}>
            <p>
              <span className="label">Client: </span>
              {order.client}
            </p>
            <p>
              <span className="label">Flower Type: </span>
              {order.flower_type}
            </p>
            <p>
              <span className="label">Arrangement: </span>
              {order.arrangement}
            </p>
            <p>
              <span className="label">Quantity: </span>
              {order.quantity}
            </p>
            <p>
              <span className="label">Delivery Date: </span>
              {order.delivery_date}
            </p>
          </article>
        ))}
    </main>
  );
}

export default App;
