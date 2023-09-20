// pages/api/user/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

const getUserData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const userId = req.query.id;

    // Fetch user from your MySQL database using userId
    // Example (This is pseudocode - implement the actual query using your MySQL package):
    // const userData = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

    // For now, let's return mock data:
    const userData = {
      id: "87654321",
      name: "John Doe",
      email: "test@testmail.com",
      dateJoined: "01/01/2023",
      campaignsOwned: "1",
      characterSheetsOwned: "2",
    }

    return res.status(200).json(userData);
  }

  // Handle other HTTP methods if necessary
  return res.status(405).end();
};

export default getUserData;