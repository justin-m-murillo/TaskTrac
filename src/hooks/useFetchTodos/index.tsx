import { useState, useEffect } from 'react'
import { Session } from "next-auth"
import { Todo } from '@/types/Todo'
import { getTodos } from '@/actions/actionsTodo'
import { useSession } from 'next-auth/react'

const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const sessionData = useSession().data;

  useEffect(()=> {
    if (sessionData && sessionData?.user) {
      getTodos({user_id: sessionData.user.id})
        .then(res => {
          const data = res.response?.data.todos as Todo[];
          setTodos(data);
        });
    } else {
      setTodos([]);
    }
  }, [sessionData])

  return [ todos ]
}

export default useFetchTodos