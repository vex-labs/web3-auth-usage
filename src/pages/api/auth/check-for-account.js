import { MongoClient } from 'mongodb';
import dbConfig from '@/db-config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { publicKey } = req.body;

  if (!publicKey) {
    return res.status(400).json({ message: 'Public key is required' });
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(dbConfig.dbName);
    const collection = db.collection(dbConfig.collections.users);

    // Find user by public key
    const user = await collection.findOne({ public_key: publicKey });

    if (user) {
      return res.status(200).json({ 
        exists: true,
        accountId: user.account_id 
      });
    } else {
      return res.status(200).json({ 
        exists: false 
      });
    }

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      message: 'Error checking account',
      error: error.message 
    });
  } finally {
    await client.close();
  }
}
