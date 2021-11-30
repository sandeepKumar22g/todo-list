import React, { useState } from "react";
import List from "./List";
import "./Todo.css";

const Todo = () => {
  const [lst, setlst] = useState("");
  const [ls, setls] = useState([]);
  const print = (event) => {
    setlst(event.target.value);
  };
  const add = () => {
    setls((oldlst) => {
      return [...oldlst, lst];
    });
    setlst("");
  };
  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Make your list"
            onChange={print}
            value={lst}
          />
          <button onClick={add} className='add'>+</button>
          <div className="list">
            <ol>
              {ls.map((e) => {
                return <List text={e} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
