import React from 'react';
import {ShowOption} from "../Types.ts";

type OwnProps = {
    showOption: ShowOption;
    updateShowOption: (v: ShowOption) => void;
    jobCount: number;
    deleteTodoRow: (job: string) => void;
    extDataAdd: () => void;
}
function Bottom({showOption, updateShowOption, jobCount, deleteTodoRow,extDataAdd}):React.FC<OwnProps> {

    const selectShowOption = (v:ShowOption, clzName:string):string => {
        return (showOption === v) ? clzName+" selected" : clzName;
    }

    return (
        <div className="todo-bottom">
            <div className="left-items">{jobCount} items</div>
            <div className="button-group">
                <button className={selectShowOption(ShowOption.ALL, 'show-all-btn')} onClick={()=>{updateShowOption(ShowOption.ALL)}}>All</button>
                <button className={selectShowOption(ShowOption.ACTIVE, 'show-active-btn')} onClick={()=>{updateShowOption(ShowOption.ACTIVE)}}>Active</button>
                <button className={selectShowOption(ShowOption.COMPLETED, 'show-completed-btn')} onClick={()=>{updateShowOption(ShowOption.COMPLETED)}}>Completed</button>
            </div>
            <button className="clear-completed-btn" onClick={() => deleteTodoRow('deleteAll')}>Clear Completed</button>
            <button className="clear-completed-btn" onClick={() => extDataAdd()}>extDataAdd</button>
        </div>
    );
}

export default Bottom;