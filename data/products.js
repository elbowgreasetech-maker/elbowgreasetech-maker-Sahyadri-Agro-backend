/**
 * Product catalog. In a production setup this would come from a database;
 * keeping it here makes the API trivial to seed and demo.
 */

const products = [
  {
    id: 'rice',
    name: 'Premium Indian Rice',
    tagline: 'Basmati & Non-Basmati varieties',
    shortDescription:
      'Long-grain aromatic Basmati and a wide range of non-Basmati varieties, sortex-cleaned and polished to international export standards.',
    longDescription:
      'Sourced from the fertile plains of northern and western India, our rice is steam-processed, sortex-cleaned, and graded for uniformity. Available in 1121, Pusa, Sharbati, Sona Masoori, IR-64, and parboiled grades. Packed in 5 kg, 10 kg, 25 kg, and 50 kg bags as well as private-label jute packaging.',
    varieties: ['1121 Basmati', 'Pusa Basmati', 'Sharbati', 'Sona Masoori', 'IR-64 Parboiled'],
    packaging: ['5 kg', '10 kg', '25 kg', '50 kg', 'Private label'],
    minimumOrder: '1 x 20ft FCL (~25 MT)',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=80',
  },
  {
    id: 'cashews',
    name: 'Whole Cashew Kernels',
    tagline: 'W180, W240, W320 grades',
    shortDescription:
      'Plump, ivory-white cashew kernels processed in food-grade facilities and vacuum-packed for export freshness.',
    longDescription:
      'Our cashews are sourced primarily from the Konkan and southern coastal belts, processed under hygienic conditions, and graded as per AFI specifications. Available in whole grades (W180, W240, W320, W450) and broken grades. Vacuum packed in 10 kg / 22.68 kg tins inside cartons for long shelf life.',
    varieties: ['W180', 'W240', 'W320', 'W450', 'Splits & Pieces'],
    packaging: ['10 kg vacuum tin', '22.68 kg vacuum tin', 'Custom retail packs'],
    minimumOrder: '1 MT',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=80',
  },
  {
    id: 'almonds',
    name: 'Premium Almonds',
    tagline: 'California & Mamra varieties',
    shortDescription:
      'Crunchy, naturally sweet almonds — available raw, blanched, or roasted — graded by size and packed for export.',
    longDescription:
      'We supply premium California almonds (Nonpareil, Carmel, Independence) and Indian Mamra almonds. Cleaned, sorted, and metal-detected before packaging. Available raw in shell, shelled whole, blanched, sliced, or roasted on request.',
    varieties: ['California Nonpareil', 'Carmel', 'Independence', 'Mamra'],
    packaging: ['10 kg cartons', '22.68 kg cartons', 'Retail-ready pouches'],
    minimumOrder: '500 kg',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=900&q=80',
  },
];

module.exports = products;
