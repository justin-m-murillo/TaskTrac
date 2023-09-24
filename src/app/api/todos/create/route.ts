import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/prisma';
import { serverCreateTodo } from '@/actions/serverActionsTodo'; // Update the path

// Define API route handler
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { test } = req.body;
  } catch (error) {
    console.error('POST API', error);
  }
  // try {
    
  //   const { userId, hasDueDate, dueDate, gradient, formData } = req.body;
  //   console.log('FORM DATA', formData);
  //   const createdTodo = await serverCreateTodo(
  //     userId,
  //     formData,
  //     hasDueDate,
  //     dueDate,
  //     gradient,
  //   );

  //   res.status(201).json(createdTodo);
  // } catch (error) {
  //   console.error('API POST Error:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }
}
