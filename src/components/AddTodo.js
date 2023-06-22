import React,{ useState} from "react";

const AddTodo=({AddTodo})=> {
    const[title,setTitle]=useState('')
    const[item,setItem]=useState('')
}

const handleTitleChange=(e)=>{
    setTitle(e.target.value);
}
const handleItemChange=(e)=>{
    setItem(e.target.value);
}

const handleAddTodo=(e) => {
    if(title.trim !=='' &&item.trim()!==''&&(e.key === 'Enter'|| e.target.tagName==='Button')){
        AddTodo(title,item);
        setTitle('')
        setItem('')
    }

}

return(
    <div>
        <input
            type='text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            onKeyPress={handleAddTodo}/>
        <input className="inputTodo"
            type="text"
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            onKeyPress={handleAddTodo}/>
    </div>
)

export default AddTodo