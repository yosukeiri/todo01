import React from 'react'

const EditArea = (props) => {
    const {onChangeTodoTitle,onChangeTodoDetail,onStatusChange,todoTitle,todoDetail,todoStatus,onClickEdit,editIndex,status} = props
  return (
    <div className="edit-area">
        <input placeholder="TODOの名前を入力" onChange={onChangeTodoTitle} value={todoTitle} />
        <input placeholder="TODOの詳細を入力" onChange={onChangeTodoDetail} value={todoDetail} />
        <select onChange={e => onStatusChange(e)}>
          {status.map((status)=> {
            if(status.label === todoStatus){
              return (<option value={status.value} key={status.value} selected>{status.label}</option>)
            }else if(status.label === "すべて"){
              return null
            }else{
              return (<option value={status.value} key={status.value}>{status.label}</option>)
            }

          }
          )}
        </select>
        <button onClick={() => onClickEdit(editIndex)}>TODOを編集</button>
    </div>
  )
}

export default EditArea
