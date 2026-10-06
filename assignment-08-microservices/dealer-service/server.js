/** Dealer Pricing microservice (Node.js/Express).
 * Serves dealer listings and prices per product.
 * Deployed target: IBM Code Engine (see ../../codeengine/README).
 */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const DEALERS = {
  1: [
    { id: 101, name: 'City Motors', price: 24500 },
    { id: 102, name: 'Prime Auto', price: 23900 },
    { id: 103, name: 'Value Cars', price: 25100 },
  ],
  2: [
    { id: 101, name: 'City Motors', price: 38900 },
    { id: 104, name: 'Highway Hub', price: 37500 },
  ],
  3: [
    { id: 102, name: 'Prime Auto', price: 18900 },
    { id: 103, name: 'Value Cars', price: 18400 },
  ],
  4: [
    { id: 104, name: 'Highway Hub', price: 42000 },
    { id: 101, name: 'City Motors', price: 41500 },
  ],
};

app.get('/', (req, res) => res.json({ service: 'dealer-pricing', status: 'ok' }));

// List dealers supplying a product: /dealers?product_id=1
app.get('/dealers', (req, res) => {
  const list = DEALERS[req.query.product_id] || [];
  res.json(list);
});

// Price offered: /price?product_id=1&dealer_id=101 (dealer_id=all for every dealer)
app.get('/price', (req, res) => {
  const list = DEALERS[req.query.product_id] || [];
  if (req.query.dealer_id === 'all') {
    return res.json(list.map((d) => ({ dealer: d.name, price: d.price })));
  }
  const found = list.find((d) => String(d.id) === String(req.query.dealer_id));
  if (!found) return res.status(404).json({ error: 'Price not found' });
  return res.json({ dealer: found.name, price: found.price });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Dealer service on ${PORT}`));
