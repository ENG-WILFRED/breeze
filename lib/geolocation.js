// Example: Finding vendors within a 15km radius of the user in Kilifi
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getNearbyVendors = async (userLat, userLng, radiusInMeters = 15000) => {
  const vendors = await prisma.vendor.findMany({
    where: {
      AND: [
        {
          latitude: {
            gte: userLat - (radiusInMeters / 111000),
            lte: userLat + (radiusInMeters / 111000),
          },
        },
        {
          longitude: {
            gte: userLng - (radiusInMeters / (111000 * Math.cos(userLat * (Math.PI / 180)))),
            lte: userLng + (radiusInMeters / (111000 * Math.cos(userLat * (Math.PI / 180)))),
          },
        },
      ],
    },
  });

  return vendors.sort((a, b) => {
    const distA = Math.sqrt(Math.pow(a.latitude - userLat, 2) + Math.pow(a.longitude - userLng, 2));
    const distB = Math.sqrt(Math.pow(b.latitude - userLat, 2) + Math.pow(b.longitude - userLng, 2));
    return distA - distB;
  });
};
