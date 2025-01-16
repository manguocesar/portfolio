import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  reques: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({ text: 'Hello' });
}
