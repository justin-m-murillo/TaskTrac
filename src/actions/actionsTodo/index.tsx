import axios from 'axios'
import { TodosState } from '../../types/Todo'
import { serverActivateTodo, serverCreateTodo, serverCompleteTodo, serverDeleteTodo, serverDeleteForever } from '@/actions/serverActionsTodo'
import { TPostTodo, TPutTodo } from '@/app/api/todo/route';
import { getSession } from 'next-auth/react';
//import { redirect } from 'next/navigation'

export const getTodos = async (user_email: string) => {
  //console.log('GET TODOS');
  try {
    const response = await axios.get('/api/todo', {
      params: {
        user_email,
      }
    });
    return { message: 'GET TODOS SUCCESS', response }
  } catch (error) {
    return { message: 'GET TODOS FAILED', error }
  }
}

export const createTodo = async (todoData: TPostTodo,) => {
  try {
    const response = await axios.post('/api/todo', todoData);
    return { message: 'CREATE TODO SUCCESS', response }
  } catch (error) {
    return { message: 'CREATE TODO FAILED', error };
  }
};

export const updateTodo = async (updateData: TPutTodo) => {
  try {
    const response = await axios.put('/api/todo', updateData);
    return { message: 'UPDATE TODO SUCCESS', response };
  } catch (error) {
    return { message: 'UPDATE TODO FAILED', error };
  }
}

export const deleteTodo = async (post_id: string) => {
  try {
    const response = await axios.delete('/api/todo', {
      params: {
        post_id,
      }
    });
    return { message: 'DELETE TODO SUCCESS', response }
  } catch (error) {
    return { message: 'DELETE TODO FAILED', error }
  }
}