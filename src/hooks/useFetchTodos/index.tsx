import { useState, useEffect } from 'react'
import { Todo } from '@/types/Todo'
import { getTodos } from '@/actions/actionsTodo'
import { useSession } from 'next-auth/react'

const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sessionData = useSession().data;

  useEffect(()=> {
    if (sessionData && sessionData?.user) {
      setIsLoading(true);
      getTodos({user_id: sessionData.user.id})
        .then(res => {
          const data = res.response?.data.todos as Todo[];
          setTodos(data);
          setIsLoading(false);
        });
    } else {
      setTodos([]);
      setIsLoading(false);
    }
  }, [sessionData])

  return { todos, isLoading }
}

export default useFetchTodos