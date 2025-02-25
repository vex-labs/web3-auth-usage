export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Only return the client ID from server-side environment
  res.status(200).json({
    clientId: process.env.WEB3AUTH_CLIENT_ID
  });
} 