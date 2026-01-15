import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    const vendors = await prisma.vendor.findMany({
      take: 100,
    });
    res.status(200).json(vendors);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
}
