/**
 * Company / brand metadata served by /api/company.
 * Single source of truth for contact info, certifications, and export markets.
 */

module.exports = {
  legalName: 'Sahyadri Agro India Pvt. Ltd.',
  shortName: 'Sahyadri Agro',
  tagline: 'Premium Indian Rice, Cashews & Almonds — Exported Worldwide',
  founded: 2018,

  contact: {
    email: 'info@sahyadriagro.com',
    phone: '+91 98XXXXXXXX',
    whatsapp: '+91 98XXXXXXXX',
    address: {
      line1: 'Plot 24, MIDC Industrial Area',
      line2: 'Sahyadri Range Road',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411019',
      country: 'India',
    },
  },

  certifications: [
    'FSSAI Licensed',
    'APEDA Registered Exporter',
    'ISO 22000:2018',
    'HACCP Compliant',
    'IEC Certified',
  ],

  exportMarkets: [
    { region: 'Middle East',     countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'] },
    { region: 'Europe',          countries: ['Germany', 'United Kingdom', 'Netherlands', 'France', 'Italy', 'Spain'] },
    { region: 'Asia',            countries: ['Singapore', 'Malaysia', 'Japan', 'South Korea', 'Hong Kong'] },
    { region: 'Africa',          countries: ['South Africa', 'Kenya', 'Nigeria', 'Egypt'] },
    { region: 'North America',   countries: ['United States', 'Canada'] },
  ],

  process: [
    {
      step: 1,
      title: 'Sourcing from Farms',
      description: 'Direct procurement from trusted farmer networks across Maharashtra, Punjab, Gujarat, and Kerala.',
      icon: 'sprout',
    },
    {
      step: 2,
      title: 'Cleaning & Polishing',
      description: 'Multi-stage destoning, sortex color sorting, and polishing on calibrated industrial lines.',
      icon: 'sparkles',
    },
    {
      step: 3,
      title: 'Quality Check',
      description: 'Lab testing for moisture, broken percentage, foreign matter, and microbial load on every batch.',
      icon: 'shield-check',
    },
    {
      step: 4,
      title: 'Packaging',
      description: 'Food-grade jute, PP, and vacuum packaging — including custom private-label options.',
      icon: 'package',
    },
    {
      step: 5,
      title: 'Export Worldwide',
      description: 'CIF / FOB shipping with full export documentation through Mumbai, Mundra, and Nhava Sheva ports.',
      icon: 'ship',
    },
  ],

  whyChooseUs: [
    { title: 'High-Quality Polishing',    description: 'Mirror-polish finish on rice; vacuum-sealed nuts.' },
    { title: 'Export Expertise',          description: 'End-to-end documentation, customs, and logistics handled in-house.' },
    { title: 'Competitive Pricing',       description: 'Direct farm sourcing keeps margins lean for our buyers.' },
    { title: 'Bulk Supply Capability',    description: 'Capacity for 200+ MT monthly per product line.' },
    { title: 'Reliable Logistics',        description: 'Trusted shipping partners and same-week loading windows.' },
    { title: 'Certified Quality',         description: 'FSSAI, APEDA, ISO 22000, and HACCP certified processes.' },
  ],
};
