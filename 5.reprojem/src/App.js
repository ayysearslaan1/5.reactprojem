import{useState} from "react"

function App() {
  const[todos, setTodos] =useState([])
  const[todo,setTodo] = useState()
  return(

    <>
    <h1>todo App</h1>
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={e =>setTodo(e.target.value)}/>
      <button type="submit">ekle</button>
    </form>
    <ul>
      {todos.map((todo,index)=>(
  
        <li key={index}>
          {todo}
      </li>
      ) }
    </ul>
    </>
  

  )
  
}

export default App;
