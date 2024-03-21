import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
};

export const TodoList = ({ todoList, changeCompleted }: Props) => {
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
                onChange={() => changeCompleted(todo.id)}
              />
            </div>
            {/* completedがtrueならクラスを適用、falseならクラスを適用しない */}
            <span
              className={todo.completed ? 'text-gray-400 line-through' : ''}
            >
              {todo.title}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
