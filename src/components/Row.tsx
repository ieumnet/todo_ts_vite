import React from 'react';
import {TodoRow} from "../Types.ts";

type OwnProps = {
    todoRow: TodoRow;
    makeDoneTodoRow: (job: string) => void;
    deleteTodoRow: (job: string) => void;
}

function Row({todoRow, makeDoneTodoRow, deleteTodoRow}):React.FC<OwnProps> {
    
    const checkeDraw = (bool: Boolean): string => {
        return bool ? "todo-item checked" : "todo-item";
    }
    const checkeDrawV = (bool: Boolean): string => {
        return bool ? "✔" : "";
    }

    const checkBox = (e) => {
        makeDoneTodoRow(e.target.parentNode.querySelector(".todo").innerText);
    }

    const deleteAction = (e) => {
        deleteTodoRow(e.target.parentNode.querySelector(".todo").innerText);
    }

    return (
        <li className={checkeDraw(todoRow.done)}>
            <div className="checkbox" onClick={checkBox}>{checkeDrawV(todoRow.done)}</div>
            <div className="todo">{todoRow.job}</div>
            <button className="delBtn" onClick={deleteAction}>x</button>
        </li>
    );
}

export default Row;