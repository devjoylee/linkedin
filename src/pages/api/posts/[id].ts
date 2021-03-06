import { connectDB } from '@utils/connectDB';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { id },
  } = req;

  const { db } = await connectDB();

  if (method === 'DELETE') {
    try {
      await db.collection('posts').deleteOne({ _id: new ObjectId(id as string) });
      res.status(200).json({ message: 'The post has been deleted!!' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
