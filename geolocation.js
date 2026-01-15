// Example: Finding vendors within a 15km radius of the user in Kilifi
const getNearbyVendors = async (userLat, userLng) => {
  const radiusInMeters = 15000; 
  
  // Using Knex.js or raw SQL to query PostGIS
  const vendors = await db.raw(`
    SELECT name, category, 
    ST_Distance(location, ST_MakePoint(?, ?)::geography) as distance
    FROM vendors
    WHERE ST_DWithin(location, ST_MakePoint(?, ?)::geography, ?)
    ORDER BY distance ASC
  `, [userLng, userLat, userLng, userLat, radiusInMeters]);

  return vendors;
};