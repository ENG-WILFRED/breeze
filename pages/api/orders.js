import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const orders = [
  { id: 'ORD-772', customer: 'Sarah J.', item: 'Ahi Tuna Poke', status: 'Preparing', total: 24.50 },
  { id: 'ORD-773', customer: 'Mike R.', item: 'Local Oyster Dozen', status: 'Out for Delivery', total: 38.00 },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const { id, status } = req.body;
    res.status(200).json({ message: `Order ${id} updated to ${status}` });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
