import './App.css';
import TodoTable from './components/TodoTable'

function App() {
  const todos = 
  [
    {rowId : 1, rowDescription: "Feed Dogs", rowUser: "Steve"},
    {rowId : 2, rowDescription: "Clean Clothes", rowUser: "Jane"},
    {rowId : 3, rowDescription: "Milk Cows", rowUser: "Denis"}
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
            <TodoTable todoList = {todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
