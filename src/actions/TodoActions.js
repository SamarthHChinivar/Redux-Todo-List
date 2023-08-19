/* Here the inner arrow function is the "Thunk" what we are using , which is receiving dispatch and getState as arguments. */ 

/* As we know that "Thunk" is a function, which is returned inside an action of Redux. */


export const AddTodoAction = (todo) => (dispatch, getState) => {
    
    //code for getting current state from Redux store:

    
    /* Here we have used Destructuring (Feature of React ES6), without Destructuring code would be like this:
    const state = getState();
    const todos = state.Todo.todos; */
    const {Todo : {todos}} = getState();

    /* LOGIC PART of this ACTION  AddTodoAction starts here: */

    //Checking whether arg. todo is present or not in the state :

     /* find() method takes a callback function as an argument. For any doubts checkout find.js file in this project, which is present outside src folder. */
    const hasTodo = todos.find((i)=> i.todo === todo);

    /* if(todo.trim() !=== "") is more prefered over if(todo !== "") , as trim() method doesn't allow any empty content*/
    if(todo.trim() !== "" && !hasTodo){
        dispatch({
           type: 'ADD_TODO',
           payload: [{id:todo, todo}, ...todos]
        });
    }
};


export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {Todo : {todos}} = getState();

    /* LOGIC PART of this ACTION  RemoveTodoAction starts here: */

    dispatch({
        type: 'REMOVE_TODO',
        //Checking the condition to return the remaining todos except the one which is to be deleted.
        payload: todos.filter((t)=> t.id !== todo.id)
    });
}