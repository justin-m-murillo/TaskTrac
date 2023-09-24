import prisma from "@/prisma/prisma"

// export const serverActivateTodo = async (
//   id: string, ) =>
// {
//   return await prisma.todo.update({
//     where: {
//       id: id,
//     },
//     data: {
//       completed: false,
//       completedAt: null,
//       deleted: false,
//       deletedAt: null,
//     }
//   })
// }


// export const serverCompleteTodo = async (id: string) => 
// {
//   return await prisma.todo.update({
//     where: {
//       id: id,
//     },
//     data: {
//       completed: true,
//       completedAt: new Date()
//     }
//   })
// }

export const serverCreateTodo = async (
  userId: string,
  formData: FormData,
  hasDueDate: boolean,
  dueDate: Date|null|undefined,
  gradient: string) => 
{
  console.log('SERVER FORM DATA', userId)
  // const title = formData.get('title')?.valueOf()
  // const description = formData.get('description')?.valueOf()
  // const location = formData.get('location')?.valueOf()
  // if (typeof title !== 'string') {
  //   throw new Error('Invalid Title')
  // }
  // if (typeof description !== 'string') {
  //   throw new Error('Invalid Description')
  // }
  // if (typeof location !== 'string') {
  //   throw new Error('Invalid Location')
  // }

  // const due = hasDueDate ? dueDate : null;
  // const data = {
  //   title,
  //   description,
  //   location,
  //   dueDate: due,
  //   bgGradient: gradient,
  //   completedAt: null, 
  //   deletedAt: null,
  //   userId,
  // };

  // return await prisma.todo.create({ data })
}

// export const serverDeleteTodo = async (id: string,) => {
//   return await prisma.todo.update({ 
//     where: {
//       id: id,
//     },
//     data: {
//       deleted: true,
//       deletedAt: new Date()
//     }
//   })
//   //console.log('Deleted', id, title)
// }

// export const serverDeleteForever = async (id: string) => {
//   return await prisma.todo.delete({
//     where: {
//       id: id
//     },
//   })
// }