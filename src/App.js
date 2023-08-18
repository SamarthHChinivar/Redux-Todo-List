import './App.css';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const[todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state)=> state.Todo);

  /* Destructuring is used here.
  Without destructuring code would be like this:
  const someVar = Todo.todos */
  const {todos} = Todo; 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }
  
  return (
    <div className="App">
      <header className='App-header' >
        <h2>Todo List App in Redux</h2>

        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Enter Todo'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 25,
              border: 'none',
              fontSize: 20,
              textAlign: 'center',
              marginLeft : 75,
            }}

            onChange={(e)=> setTodo(e.target.value)}  
            />

          <button 
            type='submit'
            style = {{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20
            }}
          >
            Go
          </button>

        </form>

        <ul className='allTodos'>
            {
              
              /* () => () is called as an arrow function with implicit return. 
                  It returns everything inside it implicitly without explicit return statement.*/

              todos && todos.map((t) => (
                <li key={t.id} className='singleTodo'>
                  <span className='todoText'>{t.todo}</span>
            
                  <button
                    style= {{
                      borderRadius: 25,
                      padding: 10,
                      border: '1px solid white',
                      color: 'white',
                      backgroundColor: '#CC5500',
                    }}

                    /* Event Handlers in JSX such as onClick take an arrow function as an argument , for taking a function with parameters.
                    For function without parameters, we can directly pass the function name as an argument without the need of an arrow function.
                    */
                    onClick={() => removeHandler(t)}
                  >
                    Delete
                  </button>
                </li>
              )
            )}

        </ul>

      </header>
    </div>
  );
}

export default App;