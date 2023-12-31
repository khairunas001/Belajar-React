import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Table (props){
    const [todos, setTodos] = useState([])

    function getTodos(){
        // console.log("test fungsi")
        axios ({
            method: 'GET',
            url:'http://localhost:3000/todos'
        })
            .then(todos =>{
                // console.log(todos.data)
                setTodos(todos.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        getTodos()
    },[])
    // const {task, status} = props.todo
    // console.log(props)
    return (
        <div className='app-table'>
        <table border='1' cellSpacing='0'>
          <thead>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
          </thead>
          <tbody>
            {
              todos.map(todo =>{
                return (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td>
                        {/* {JSON.stringify(todo.status)} */
                            todo.status ? 'Done' :'In Progress'
                        }

                    </td>
                  </tr>
                )
              })

            }
            
          </tbody>
        </table>
      </div>
    )
}

export default Table