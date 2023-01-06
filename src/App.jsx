import { React,useState } from "react";
import './App.css';
import InputArea from "./components/InputArea";
import EditArea from "./components/editArea";
import TodoList from "./components/TodoList";
// import {v4 as uuid} from "uuid"; 

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [todoStatus, setTodoStatus] = useState("未着手");
  const [num, setNum] = useState(1);
  const [editIndex, setEditIndex] = useState();
  const [edit, setEdit] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todoStatusFilter,setTodoStatusFilter] = useState("すべて");
  const [todoSort,setTodoSort] = useState("none");
  const status = [
    {value:'all',label:'すべて'},
    {value:'notStart',label:'未着手'},
    {value:'inProgress',label:'作業中'},
    {value:'done',label:'完了'},
  ]
  const sortTodo = [
    {value:'none',label:'ソートなし'},
    {value:'id',label:'id'},
    {value:'title',label:'タイトル'},
    {value:'status',label:'ステータス'},
  ]

  const onChangeTodoTitle = (event) => {
    setTodoTitle(event.target.value);
  };
  const onChangeTodoDetail = (event) => {
    setTodoDetail(event.target.value);
  };
  const onStatusChange = (e) => {
    const targetOption = status.filter((status)=>{
      return status.value === e.target.value
    })
    setTodoStatus(targetOption[0].label);
  }
  const onChangeStatusFilter = (e) =>{
    const targetOption = status.filter((status)=>{
      return status.value === e.target.value
    })
    setTodoStatusFilter(targetOption[0].label);
  }
  const onChangeSort = (e) =>{
    const targetOption = sortTodo.filter((sortTodo)=>{
      return sortTodo.value === e.target.value
    })
    setTodoSort(targetOption[0].value);
  }

  const onClickAdd = () => {
    if (todoTitle === "") return;
    const newTodo = {
      id:num,
      title:todoTitle,
      status:todoStatus,
      detail:todoDetail,
    }
    const newTodos = [...todoList, newTodo];
    setTodoList(newTodos);
    setNum(num + 1);
    setTodoTitle("");
    setTodoDetail("");
    setTodoStatus("未着手");
  };
  const deleteTodo = (index) =>{
    const newTodos = [...todoList];
    newTodos.splice(index,1);
    setTodoList(newTodos);
  }
  const editTodo = (index) =>{
    setEdit(true);
    setTodoTitle(todoList[index].title)
    setTodoDetail(todoList[index].detail)
    setTodoStatus(todoList[index].status)
    setEditIndex(index)
  }
  const onClickEdit = (index) =>{
    const newTodos = [...todoList];
    newTodos[index].title = todoTitle;
    newTodos[index].detail = todoDetail;
    newTodos[index].status = todoStatus;
    setTodoTitle("");
    setTodoDetail("");
    setTodoStatus("未着手");
    setEditIndex("")
    setEdit(false);
  }
  return (
    <>
    {!edit && 
        <InputArea 
        todoTitle={todoTitle}
        todoDetail={todoDetail}
        edit={edit}
        onChangeTodoTitle={onChangeTodoTitle}
        onChangeTodoDetail={onChangeTodoDetail}
        onClickAdd={onClickAdd}
        />
    }
    {edit && 
        <EditArea 
        todoTitle={todoTitle}
        todoDetail={todoDetail}
        todoStatus={todoStatus}
        edit={edit}
        onChangeTodoTitle={onChangeTodoTitle}
        onChangeTodoDetail={onChangeTodoDetail}
        onClickEdit={onClickEdit}
        status={status}
        editIndex = {editIndex}
        onStatusChange = {onStatusChange}
        />
    }
    <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        todoStatusFilter = {todoStatusFilter}
        todoSort = {todoSort}
    />
    <div className="filter-area">
      <select onChange={e => onChangeStatusFilter(e)}>
      {status.map((status)=> (<option value={status.value} key={status.value}>{status.label}</option>))}
      </select>
    </div>
    <div className="sort-area">
      <select onChange={e => onChangeSort(e)}>
      {sortTodo.map((sortTodo)=> (<option value={sortTodo.value} key={sortTodo.value}>{sortTodo.label}</option>))}
      </select>
    </div>
    </>
  );
}

export default App;
