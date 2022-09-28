import { useState } from "react";

import "./sandbox.styles.scss";

const SandBox = () => {
  const [todoList, setToDoList] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  const onChangeHandler = (event) => {
    setTargetValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.target.value === "") {
      return;
    }

    const addToDoList = () => {
      setTargetValue(event.target.value);
      setToDoList((oldArray) => [...oldArray, targetValue]);
      setTargetValue("");
    };

    addToDoList();

    if (event.keyCode === 13) {
      addToDoList();
    }
  };

  return (
    <div className="sandbox">
      <div>
        <input
          type="text"
          onChange={onChangeHandler}
          value={targetValue}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={
            handleKeyPress

            //   () => {
            //   todoList.push(targetValue);
            //   setToDoList(todoList.filter(() => true));
            //   console.log(todoList);
            //   setToDoList((oldArray) => [...oldArray, targetValue]);
            //   setTargetValue("");
            // }
          }
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
