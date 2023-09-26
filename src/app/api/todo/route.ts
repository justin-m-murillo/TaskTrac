import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/** GET */
export type TGetTodo = {
  user_id: string;
}
export async function GET(request: NextRequest) {
  const user_id = request.nextUrl.searchParams.get('user_id');
  const todos = await prisma.todo.findMany({ where: { user_id } })
  
  return todos.length 
    ? NextResponse.json({ message: 'GET SUCCESS', todos })
    : NextResponse.json({ message: 'GET RETURNED EMPTY', todos });
}

/** POST */
export type TPostTodo = {
  title:       string;
  user_id?:    string; 
  description: string | null;
  location:    string | null;
  due_date:    Date | null;
  bg_gradient: string;
  created_at:  Date;
  updated_at:  Date;
}
export async function POST(request: NextRequest) {
  const { 
    user_id,
    title,
    description,
    location,
    due_date,
    bg_gradient,
    created_at,
    updated_at
  } = await request.json() as TPostTodo;

  const user = await prisma.user.findUnique({
    where: { id: user_id as string }
  })
  if (!user) { throw new Error('POST API: USER NOT FOUND (invoked prisma.user.findUnique {id})')}

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        location,
        due_date,
        bg_gradient,
        created_at,
        updated_at,
        user: {
          connect: { id: user_id }
        }
      },
    });
  
    return NextResponse.json({ message: "POST SUCCESS", todo });
  } catch (error) {
    return NextResponse.json({ message: "POST FAILED", error });
  }
}


/** PUT */
export type TPutTodo = {
  id: string;
  completed_at: Date | null | undefined;
  deleted_at:   Date | null | undefined;
}

export async function PUT(request: NextRequest) {
  const { id, completed_at, deleted_at } = await request.json() as TPutTodo;
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { 
        completed_at, 
        deleted_at 
      }
    });
    return NextResponse.json({ message: 'PUT SUCCESS', todo })
  } catch (error) {
    return NextResponse.json({ message: 'PUT FAILED', error });
  }
}

/** DELETE */
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('post_id') as string;
  try {
    const deleted = await prisma.todo.delete({ 
      where: { id },
      select: {
        id: true,
      }
    });
  
    return NextResponse.json({ message: 'DELETE SUCCESS', deleted });
  } catch (error) {
    return NextResponse.json({ message: 'DELETE FAILED', error });
  }
}

export async function OPTIONS(request: NextRequest) {
  const response = new NextResponse(null);

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}