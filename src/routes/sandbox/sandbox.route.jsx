import { useState } from "react";

import "./sandbox.styles.scss";

const SandBox = () => {
  const [todoList, setToDoList] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  const onChangeHandler = (event) => {
    setTargetValue(event.target.value);
  };

  return (
    <div className="sandbox">
      <div>
        <input type="text" onChange={onChangeHandler} />
        <button
          onClick={() => {
            // todoList.push(targetValue);
            // setToDoList(todoList.filter(() => true));
            console.log(todoList);
            setToDoList((oldArray) => [...oldArray, targetValue]);
          }}
        >
          ADD
        </button>
      </div>
      {todoList.map((todo, i) => (
        <div key={`todo ${i}`} className="todo-list">
          <button
            onClick={() => {
              setToDoList((deleteThis) =>
                deleteThis.filter((_, index) => index !== i)
              );
              //   setToDoList((products) =>
              //     products.filter((_, index) => index !== i)
              //   );

              console.log(todoList);
            }}
          >
            x
          </button>
          <div>{todo}</div>
        </div>
      ))}
    </div>
  );
};

export default SandBox;
