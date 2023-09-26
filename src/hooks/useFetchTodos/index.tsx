import { useState, useEffect } from 'react'
import { Todo } from '@/types/Todo'
import { getTodos } from '@/actions/actionsTodo'
import { Session } from 'next-auth'

const useFetchTodos = (email: string | null | undefined) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=> {
    setIsLoading(true);
    if (email) {
      getTodos(email)
        .then(res => {
          const data = res.response?.data.todos as Todo[];
          setTodos(data ?? []);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [email])

  return { todos, isLoading }
}

export default useFetchTodos