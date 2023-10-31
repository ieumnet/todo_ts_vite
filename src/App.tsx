import './App.css';

export default function App() {

    return (
        <>
            <div className="todo-wrapper">
                <div className="todo-title"></div>
                <div className="todo-box">

                    <div className="todo-input-box">
                        <button className="complete-all-btn">✔</button>
                        <input type="text" className="todo-input" placeholder="input to do .."/>
                    </div>
                    <ul className="todo-list">
                        <li className="todo-item checked">
                            <div className="checkbox">✔</div>
                            <div className="todo">첫번째 할 일</div>
                            <button className="delBtn">x</button>
                        </li>
                        <li className="todo-item">
                            <div className="checkbox"></div>
                            <div className="todo">두번째 할 일</div>
                            <button className="delBtn">x</button>
                        </li>
                        <li className="todo-item">
                            <div className="checkbox"></div>
                            <div className="todo">세번째 할 일</div>
                            <button className="delBtn">x</button>
                        </li>
                    </ul>
                    <div className="todo-bottom">
                        <div className="left-items">3 items left</div>
                        <div className="button-group">
                            <button className="show-all-btn selected" data-type="all">All</button>
                            <button className="show-active-btn" data-type="active">Active</button>
                            <button className="show-completed-btn" data-type="completed">Completed</button>
                        </div>
                        <button className="clear-completed-btn">Clear Completed</button>
                    </div>
                </div>
                <p className='info'></p>
            </div>
        </>
    );
}
