

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

// export const serverCreateTodo = async (
//   data: FormData, 
//   hasDueDate: boolean, 
//   dueDate: Date|null|undefined,
//   gradient: string) => 
// {
//   const title = data.get('title')?.valueOf()
//   const description = data.get('description')?.valueOf()
//   const location = data.get('location')?.valueOf()
//   const due = hasDueDate ? dueDate : null 
//   if (typeof title !== 'string') {
//     throw new Error('Invalid Title')
//   }
//   if (typeof description !== 'string') {
//     throw new Error('Invalid Description')
//   }
//   if (typeof location !== 'string') {
//     throw new Error('Invalid Location')
//   }

//   return await prisma.todo.create({ 
//     data: {
//       title,
//       description,
//       location,
//       dueDate: due,
//       bgGradient: gradient,
//       completed: false, 
//       deleted: false 
//   }})
// }

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