// Paradise Nursery catalog: 3 categories x 6 houseplants.
// Each plant has a thumbnail, name, description and price.
const plants = [
  // ---- Air Purifying Plants ----
  { id: 'snake-plant', name: 'Snake Plant', price: 25, category: 'Air Purifying Plants', image: '/images/snake-plant.svg', description: 'Hardy upright leaves that filter indoor air toxins.' },
  { id: 'spider-plant', name: 'Spider Plant', price: 18, category: 'Air Purifying Plants', image: '/images/spider-plant.svg', description: ' cascading striped leaves, great for hanging baskets.' },
  { id: 'peace-lily', name: 'Peace Lily', price: 30, category: 'Air Purifying Plants', image: '/images/peace-lily.svg', description: 'Elegant white blooms that thrive in low light.' },
  { id: 'aloe-vera', name: 'Aloe Vera', price: 15, category: 'Air Purifying Plants', image: '/images/aloe-vera.svg', description: 'Medicinal succulent with soothing gel leaves.' },
  { id: 'boston-fern', name: 'Boston Fern', price: 22, category: 'Air Purifying Plants', image: '/images/boston-fern.svg', description: 'Lush feathery fronds that love humidity.' },
  { id: 'rubber-plant', name: 'Rubber Plant', price: 28, category: 'Air Purifying Plants', image: '/images/rubber-plant.svg', description: 'Bold glossy leaves, a classic statement plant.' },
  // ---- Flowering Plants ----
  { id: 'orchid', name: 'Phalaenopsis Orchid', price: 35, category: 'Flowering Plants', image: '/images/orchid.svg', description: 'Long-lasting exotic blooms for bright rooms.' },
  { id: 'anthurium', name: 'Anthurium', price: 32, category: 'Flowering Plants', image: '/images/anthurium.svg', description: 'Glossy heart-shaped red spathes all year.' },
  { id: 'african-violet', name: 'African Violet', price: 14, category: 'Flowering Plants', image: '/images/african-violet.svg', description: 'Compact violet blooms perfect for desks.' },
  { id: 'bromeliad', name: 'Bromeliad', price: 26, category: 'Flowering Plants', image: '/images/bromeliad.svg', description: 'Tropical rosette with a fiery flower spike.' },
  { id: 'kalanchoe', name: 'Kalanchoe', price: 16, category: 'Flowering Plants', image: '/images/kalanchoe.svg', description: 'Cheerful clusters of tiny long-lived flowers.' },
  { id: 'hibiscus', name: 'Indoor Hibiscus', price: 24, category: 'Flowering Plants', image: '/images/hibiscus.svg', description: 'Big showy blooms that love sunny windows.' },
  // ---- Succulents & Low Maintenance ----
  { id: 'jade-plant', name: 'Jade Plant', price: 20, category: 'Succulents & Low Maintenance', image: '/images/jade-plant.svg', description: 'Lucky coin-shaped leaves, needs little water.' },
  { id: 'echeveria', name: 'Echeveria', price: 12, category: 'Succulents & Low Maintenance', image: '/images/echeveria.svg', description: 'Sculptural rosette, ideal for sunny sills.' },
  { id: 'zz-plant', name: 'ZZ Plant', price: 27, category: 'Succulents & Low Maintenance', image: '/images/zz-plant.svg', description: 'Nearly indestructible glossy foliage.' },
  { id: 'golden-cactus', name: 'Golden Barrel Cactus', price: 19, category: 'Succulents & Low Maintenance', image: '/images/golden-cactus.svg', description: 'Round golden-spined desert charmer.' },
  { id: 'pothos', name: 'Golden Pothos', price: 13, category: 'Succulents & Low Maintenance', image: '/images/pothos.svg', description: 'Trailing vines that grow almost anywhere.' },
  { id: 'dracaena', name: 'Dracaena Marginata', price: 23, category: 'Succulents & Low Maintenance', image: '/images/dracaena.svg', description: 'Dragon-tree spikes with red-edged leaves.' },
];

export const categories = [...new Set(plants.map((p) => p.category))];

export default plants;
