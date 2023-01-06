import React from 'react'

const TodoList = (props) => {
    const {todoList,deleteTodo,editTodo,todoStatusFilter,todoSort} = props;
    var newTodoList = [...todoList];
    if(todoStatusFilter !== "すべて"){
        newTodoList = newTodoList.filter((todo)=>{
            return todo.status === todoStatusFilter
        })
    }
    if(todoSort !== "none"){
        newTodoList = newTodoList.sort((a,b) =>{
            if ( a[todoSort] > b[todoSort] ) return -1;
            if ( b[todoSort] > a[todoSort] ) return 1;
          
            return 0;
        })
    }
  return (
    <div className="todo-area">
        <h2>TODOリスト</h2>
        <div className="todo-list">
            {newTodoList.map((todo,index)=>{
                return (
                    <dl key={todo.id}>
                        <dt>{todo.title}</dt>
                        <dd className="id">{todo.id}</dd>
                        <dd className="status">{todo.status}</dd>
                        <dd className="detail">{todo.detail}</dd>
                        <dd className="add-btn"><button onClick={() => deleteTodo(index)} >削除</button></dd>
                        <dd className="edit-btn"><button onClick={() => editTodo(index)}>編集</button></dd>
                    </dl>
                );
            })}
        </div>
    </div>
  )
}

export default TodoList