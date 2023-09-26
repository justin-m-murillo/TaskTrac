import { useState, useEffect } from 'react'
import { Todo } from '@/types/Todo'
import { getTodos } from '@/actions/actionsTodo'
import { SessionUser } from '@/types/next-auth'

const useFetchTodos = (sessionData: SessionUser | null | undefined) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=> {
    setIsLoading(true);
    if (sessionData) {
      getTodos(sessionData.id)
        .then(res => {
          const data = res.response?.data.todos as Todo[];
          setTodos(data ?? []);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [sessionData])

  return { todos, isLoading }
}

export default useFetchTodos