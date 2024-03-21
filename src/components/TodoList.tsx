import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => {
  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 rounded bg-white p-2"
        >
          <label className="flex grow items-center gap-3 hover:cursor-pointer">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-5"
                checked={todo.completed}
              />
            </div>
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};
