import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => {
  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
