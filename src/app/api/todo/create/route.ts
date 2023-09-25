import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serverCreateTodo } from '@/actions/serverActionsTodo'; // Update the path
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(request: NextRequest) {
  const { title, description, location, due_date, bg_gradient } = await request.json();
  console.log('POST TITLE', title);
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string | undefined }
  })
  console.log('POST USERID', user?.id);

  try {
    const todo = null
  //   const todo = await prisma.todo.create({
  //     data: {
  //       title,
  //       description,
  //       location,
  //       due_date: due_date ? new Date(due_date) : null,
  //       bg_gradient,
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //       user: {
  //         connect: { id: userId } // Replace '...' with the actual user ID
  //       }
  //     },
  //   });
  
    return NextResponse.json({ message: "POST SUCCESS", todo });
  } catch (error) {
    return NextResponse.json({ message: "POST FAILED", error });
  }
}