const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Insert the real Kilifi establishments
  const vendors = [
    // KILIFI TOWN & MNARANI
    { name: 'Mnarani Club & Spa', category: 'Resort/Seafood', longitude: 39.8512, latitude: -3.6375 },
    { name: 'Silver Palm Spa & Resort', category: 'Luxury/Italian', longitude: 39.8654, latitude: -3.6450 },
    { name: 'Nautilus Restaurant', category: 'Fine Dining/Seafood', longitude: 39.8540, latitude: -3.6340 },
    { name: 'Mujos Cafe', category: 'Bakery/Cafe', longitude: 39.8525, latitude: -3.6315 },
    { name: 'Distanti Terrace', category: 'Italian/Pizza', longitude: 39.8533, latitude: -3.6322 },
    { name: 'The Boatyard', category: 'Seafood/Grill', longitude: 39.8505, latitude: -3.6380 },
    { name: 'Vuma Cliffs Lodge', category: 'African/Eco', longitude: 39.9100, latitude: -3.6800 },
    { name: 'Kilifi Plantation Coffee Shop', category: 'Cafe/Breakfast', longitude: 39.8400, latitude: -3.6200 },
    { name: 'Kuwinda Camp', category: 'Eco-Tourism/Grill', longitude: 39.8100, latitude: -3.6000 },
    // WATAMU
    { name: 'Ocean Sports Resort', category: 'Beach Bar/Grill', longitude: 40.0150, latitude: -3.3550 },
    { name: 'Hemingways Watamu', category: 'Fine Dining', longitude: 40.0180, latitude: -3.3580 },
    { name: 'Lichthaus', category: 'Sunset Bar/Tapas', longitude: 39.9950, latitude: -3.3850 },
    { name: 'Pilipan Restaurant', category: 'Asian Fusion', longitude: 39.9880, latitude: -3.3620 },
    { name: 'Papa Remo Beach', category: 'Beach Club/Italian', longitude: 40.0250, latitude: -3.3450 },
    { name: 'Medina Palms', category: 'International/Luxury', longitude: 40.0120, latitude: -3.3610 },
    { name: 'Crab Shack Dabaso', category: 'Community/Seafood', longitude: 39.9750, latitude: -3.3800 },
    { name: 'Non Solo Gelato', category: 'Dessert/Gelato', longitude: 40.0140, latitude: -3.3520 },
    // MALINDI
    { name: 'Diamonds Dream of Africa', category: 'Resort/International', longitude: 40.1250, latitude: -3.2350 },
    { name: 'The Wine Box', category: 'Wine Bar/Deli', longitude: 40.1210, latitude: -3.2280 },
    { name: 'Baby Marrow', category: 'Art/Italian', longitude: 40.1230, latitude: -3.2320 },
    { name: 'Old Kenya Magic', category: 'Local Grill', longitude: 40.1180, latitude: -3.2150 },
    { name: 'Osteria Beach', category: 'Seafood/Pizza', longitude: 40.1280, latitude: -3.2400 },
    { name: 'Sandies Tropical Village', category: 'Resort/Buffet', longitude: 40.1260, latitude: -3.2360 },
    { name: 'La Malindina', category: 'Luxury/Garden', longitude: 40.1150, latitude: -3.2200 },
    // MTWAPA & OTHERS
    { name: 'The Moorings', category: 'Floating Restaurant', longitude: 39.7350, latitude: -3.9450 },
    { name: 'Jumba Ruins Monki', category: 'History/Seafood', longitude: 39.7550, latitude: -3.9300 },
    { name: 'Express Shop', category: 'Convenience/Fast Food', longitude: 39.8520, latitude: -3.6330 },
    { name: 'Kasarani Riverside', category: 'Local Dishes/Drinks', longitude: 39.7380, latitude: -3.9480 },
    { name: 'Vipingo Ridge (Beach Club)', category: 'Luxury Grill', longitude: 39.8250, latitude: -3.8150 },
    { name: 'Pwani University Guest House', category: 'Budget/Local', longitude: 39.8480, latitude: -3.6280 },
  ];

  for (const vendor of vendors) {
    await prisma.vendor.create({ data: vendor });
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
