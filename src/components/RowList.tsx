import React, {useRef, useState} from 'react';
import Row from "./Row.tsx";
import Bottom from "./Bottom.tsx";
import {ShowOption, TodoList} from "../Types.ts";


type OwnProps = {
    todos: TodoList;
    addCallBack: (job: string) => void;
    makeDoneTodoRow: (job: string) => void;
    updateShowOption: (v: ShowOption) => void;
    deleteTodoRow: (job: string) => void;
    extDataAdd: () => void;
}
function RowList({todos, addCallBack, makeDoneTodoRow, updateShowOption, deleteTodoRow, extDataAdd}):React.FC<OwnProps>{

    const indexx = useRef(0);
    let jobCount = 0;

    const makeTodoRows = () => {
        jobCount = todos.list
            .filter(job => {
                if (todos.showOption === ShowOption.ALL){
                    return true;
                }else if (todos.showOption === ShowOption.ACTIVE){
                    return !job.done;
                }else if (todos.showOption === ShowOption.COMPLETED){
                    return job.done;
                }
            }).length;

        return todos.list
            .filter(job => {
              if (todos.showOption === ShowOption.ALL){
                  return true;
              }else if (todos.showOption === ShowOption.ACTIVE){
                  return !job.done;
              }else if (todos.showOption === ShowOption.COMPLETED){
                  return job.done;
              }
            }).map(job => <Row key={++indexx.current} todoRow={job} makeDoneTodoRow={makeDoneTodoRow} deleteTodoRow={deleteTodoRow}/>);
    }

    const inputRef = useRef(null);

    return (
        <div className="todo-wrapper">
            <div className="todo-title">{todos.title}</div>
            <div className="todo-box">

                <div className="todo-input-box">
                    <button className="complete-all-btn">✔</button>
                    <input type="text" className="todo-input" ref={inputRef} onKeyDown={(e) => {
                        if (e.code === "Enter"){
                            addCallBack(inputRef.current.value);
                            inputRef.current.value = "";
                        }
                    }} placeholder="input to do .."/>
                </div>
                <ul className="todo-list">
                    {makeTodoRows()}
                </ul>
                <Bottom showOption={todos.showOption} updateShowOption={updateShowOption} jobCount={jobCount} deleteTodoRow={deleteTodoRow} extDataAdd={extDataAdd}/>
            </div>
            <p className='info'></p>
        </div>
    );
}

export default RowList;