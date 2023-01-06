import React from 'react'

const InputArea = (props) => {
    const {onChangeTodoTitle,onChangeTodoDetail,todoTitle,todoDetail,onClickAdd} = props
  return (
    <div className="input-area">
        <input placeholder="TODOの名前を入力" onChange={onChangeTodoTitle} value={todoTitle} />
        <input placeholder="TODOの詳細を入力" onChange={onChangeTodoDetail} value={todoDetail} />
        <button onClick={onClickAdd}>TODOを追加</button>
    </div>
  )
}

export default InputArea
