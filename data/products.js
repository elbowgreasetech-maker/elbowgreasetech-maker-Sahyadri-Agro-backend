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
    name: 'Cashew Nuts',
    tagline: 'W180, W240, W320 grades',
    shortDescription:
      'Plump, ivory-white processed cashew kernels — food-grade cleaned, graded, and vacuum-packed for export freshness.',
    longDescription:
      'Our cashew kernels are processed under hygienic conditions and graded as per AFI specifications. Available in whole grades (W180, W240, W320, W450) and broken grades. Vacuum packed in 10 kg / 22.68 kg tins inside cartons for long shelf life.',
    varieties: ['W180', 'W240', 'W320', 'W450', 'Splits & Pieces'],
    packaging: ['10 kg vacuum tin', '22.68 kg vacuum tin', 'Custom retail packs'],
    minimumOrder: '1 MT',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=900&q=80',
  },
  {
    id: 'raw-cashew-nut',
    name: 'Raw Cashew Nut',
    tagline: 'Unprocessed, in-shell cashew nuts',
    shortDescription:
      'Unprocessed raw cashew nuts (RCN) sourced directly from coastal growing belts, sun-dried and moisture-tested for processing and import buyers.',
    longDescription:
      'Sourced directly from farmer networks along the Konkan coast, our raw cashew nuts are sun-dried to export-grade moisture levels and cleaned of foreign matter before bagging. Suited to processors looking to shell and grade in-house.',
    varieties: ['Standard RCN', 'Premium out-turn grade'],
    packaging: ['80 kg jute bags', 'Bulk container loading'],
    minimumOrder: '1 x 20ft FCL',
    image: 'https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?w=900&q=80',
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    tagline: 'High-curcumin finger & powder turmeric',
    shortDescription:
      'Vivid, high-curcumin turmeric — available as whole finger/bulb and finely milled powder — meeting international spice export standards.',
    longDescription:
      'Grown and cured in India’s turmeric belts, our turmeric is polished, graded, and lab-tested for curcumin content, moisture, and microbial load. Available as whole finger, bulb, or finely milled powder, packed to preserve color and aroma over long transit.',
    varieties: ['Whole Finger', 'Whole Bulb', 'Turmeric Powder'],
    packaging: ['25 kg PP bags', '50 kg bulk bags', 'Retail pouches'],
    minimumOrder: '1 MT',
    image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=900&q=80',
  },
  {
    id: 'soyabean',
    name: 'Soyabean',
    tagline: 'Food & feed-grade soyabean',
    shortDescription:
      'Clean, uniform soyabean sourced from India’s major growing belts, sortex-cleaned and graded for food and feed-grade export.',
    longDescription:
      'Our soyabean is procured from trusted farmer networks, sortex-cleaned to remove foreign matter, and graded for oil content and uniformity. Suitable for crushing, feed, and food-grade applications.',
    varieties: ['Food-grade', 'Feed-grade'],
    packaging: ['50 kg PP bags', 'Bulk container loading'],
    minimumOrder: '1 x 20ft FCL (~25 MT)',
    image: 'https://images.unsplash.com/photo-1572457224112-06d191bb6d01?w=900&q=80',
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    tagline: 'Malabar & Tellicherry grades',
    shortDescription:
      'Premium Malabar and Tellicherry black pepper — sun-dried, machine-cleaned, and sorted for uniform piperine content and bold aroma.',
    longDescription:
      'Sourced from the spice-rich Konkan coast and Kerala highlands, our black pepper is carefully harvested at peak maturity, sun-dried to optimal moisture levels, and machine-cleaned to remove impurities. Available in Malabar Garbled, Malabar Ungarbled, and Tellicherry Extra Bold grades. Packed in food-safe PP woven bags or vacuum-sealed for freshness retention.',
    varieties: ['Malabar Garbled', 'Malabar Ungarbled', 'Tellicherry Bold', 'Tellicherry Extra Bold'],
    packaging: ['25 kg PP woven bags', '50 kg bulk bags', 'Vacuum-sealed retail packs'],
    minimumOrder: '500 kg',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=900&q=80',
  },
];

module.exports = products;
