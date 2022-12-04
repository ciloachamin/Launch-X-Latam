import React,{useState} from "react";
import FormTodo from './FormTodo';
import TaskList from './TaskList';

const Container=()=>{

    const [list, setList]=useState([]);
    const addItem =addItem=>{
        setList([...list,addItem])
    }

    return(
        <div>
            <FormTodo addItem={addItem}></FormTodo>
            <TaskList list={list} setList={setList}></TaskList>
        </div>
    );
}

export default Container;