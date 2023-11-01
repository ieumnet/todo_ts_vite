import './App.css';
import {ShowOption, TodoList} from "./Types.ts";
import RowList from "./components/RowList.tsx";
import {useState} from "react";

export default function App() {

    const todoData: TodoList = {
        title: 'jn... ',
        list: [{job: "job 1", done: false} , {job: "job 2", done: false} ,{job: "job 4", done: true} ],
        showOption: ShowOption.ALL
    }

    const [todos, setTodos] = useState<TodoList>(todoData);

    const addTodoRow = (job: string):void => {
        setTodos({
           ...todos , list: [...todos.list , {job: job , done: false}]
        });
    }

    const makeDoneTodoRow = (job: string) => {
        setTodos({
           ...todos , list: todos.list.map( row => {return (job === row.job) ? {job: row.job , done: !row.done} : row})
        });
    }

    const deleteTodoRow = (job: string) => {
        if (job === 'deleteAll'){
            setTodos({
                ...todos , list: []
            });
        }else{
            setTodos({
               ...todos , list: todos.list.filter( row => job !== row.job)
            });
        }
    }

    const updateShowOption = (v:ShowOption) => {
        setTodos({
            ...todos, showOption: v
        });
    }

    return (
        <>
            <RowList todos={todos} addCallBack={addTodoRow} makeDoneTodoRow={makeDoneTodoRow} updateShowOption={updateShowOption} deleteTodoRow={deleteTodoRow}/>
        </>
    );
}
