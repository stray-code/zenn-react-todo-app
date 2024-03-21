import { useState } from 'react';

import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoSummary } from './components/TodoSummary';

import { dummyTodoList } from './data/dummyTodoList';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  // 対象のTodoの完了を変更
  const changeCompleted = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidなら、completedを変更
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        // それ以外のtodoなら、そのまま返す
        return todo;
      });
    });
  };

  // Todoを追加
  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      // 新しいTodoを作成
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      // 変更前のTodoリストと合わせる
      return [newTodo, ...prevTodoList];
    });
  };

  // 対象のTodoを削除
  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      // 対象のidでないTodoを残す
      return prevTodoList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  // 完了したTodoをすべて削除
  const deleteAllCompleted = () => {
    setTodoList((prevTodoList) => {
      // 完了していないTodoを残す
      return prevTodoList.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="space-y-5 rounded bg-slate-200 p-5">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
