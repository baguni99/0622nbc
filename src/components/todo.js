import React from "react";

const Todo=(props) => {
    const {todo,markTodoAsDone,removeTodo,cancelTodo}=props
}

    const handleMarkAsDone=()=>{
        markTodoAsDone(todo.id)
    }

    const handleRemoveTodo=()=>{
        removeTodo(todo.id)
    }

    const handleCancelTodo=()=>{
        CancelTodo(todo.id)
    }

    return(
        <div className="Todo">
            <p>{todo.title}</p>
            <p>{todo.item}</p>
            {!todo.isDone && <button onClick={handleMarkAsDone}>완료</button>}
            {!todo.isDone && <button onClick={handleRemoveTodo}>삭제</button>}
            {!todo.isDone && <button onClick={handleCancelTodo}>취소</button>}
            {!todo.isDone && <button onClick={handleRemoveTodo}>삭제</button>}
        </div>
    )

export default Todo;