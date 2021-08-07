//import logo from './logo.svg';
import './App.css';

function ToDoItem(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.item.done} />
        {props.item.name}
      </label>
    </li>
  );
}

function ToDoList(props) {
  return (
    <ul className="todo-list">
      {props.items.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function App() {
  const items = [
    { id: 1, name: "dance", done: false },
    { id: 2, name: "eigyoukatudou", done: true},
    { id: 3, name: "magazine", done: false},
  ];

  return (
    <dev>
      <h1>ToDo Mock</h1>
      <ToDoList items={items} />
    </dev>
  );
}

export default App;
