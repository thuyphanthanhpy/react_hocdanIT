const TodoNew =(props) =>{
  console.log(">>>check out", props)
  const {addNewTodo} = props;
  addNewTodo("Eric")
    return (
       <div className="todo-new">
      <input type ="text"/>
      <button>Add</button>
    </div> 
    )
}
export default TodoNew;