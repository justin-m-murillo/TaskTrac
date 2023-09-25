import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

/** UTILITIES */
type TGetSessionReturn = {
  session: Session | null;
  userId: string | null;
}
async function getSession() {
  const session = await getServerSession(authOptions);
  const userId  = session?.user?.id ?? null;
  return { session, userId }
}

/** GET */
export type TGetTodo = {
  user_id: string;
}
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  const todos = await prisma.todo.findMany({
    where: { user_id: id }
  })
  return NextResponse.json({ message: 'GET SUCCESS', todos });
}

/** POST */
export type TPostTodo = {
  title:       string;
  description: string | null;
  location:    string | null;
  due_date:    Date | null;
  bg_gradient: string;
}
export async function POST(request: NextRequest) {
  const { title, description, location, due_date, bg_gradient } = await request.json() as TPostTodo;
  const session = await getServerSession(authOptions);
  const userId  = session?.user?.id ?? null;
  if (!userId) { throw new Error('POST API: USER NOT FOUND (invoked getServerSession)') }

  const user = await prisma.user.findUnique({
    where: { id: userId }
  })
  if (!user) { throw new Error('POST API: USER NOT FOUND (invoked prisma.user.findUnique {id})')}

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        location,
        due_date: due_date ? new Date(due_date) : null,
        bg_gradient,
        created_at: new Date(),
        updated_at: new Date(),
        user: {
          connect: { id: userId }
        }
      },
    });
  
    return NextResponse.json({ message: "POST SUCCESS", todo });
  } catch (error) {
    return NextResponse.json({ message: "POST FAILED", error });
  }
}