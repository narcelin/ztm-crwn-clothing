import { useState } from "react";

import "./sandbox.styles.scss";

const SandBox = () => {
  const [todoList, setTheArray] = useState([]);
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
            // setTheArray(todoList.filter(() => true));
            console.log(todoList);
            setTheArray((oldArray) => [...oldArray, targetValue]);
          }}
        >
          ADD
        </button>
      </div>
      {todoList.map((todo, i) => (
        <div key={`todo ${i}`}>
          <div>{todo}</div>
          <button
            onClick={() => {
              setTheArray((deleteThis) =>
                deleteThis.filter((_, index) => index !== i)
              );
              //   setTheArray((products) =>
              //     products.filter((_, index) => index !== i)
              //   );

              console.log(todoList);
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              console.log(todoList);
            }}
          >
            TODO CONSOLEOG
          </button>
        </div>
      ))}
    </div>
  );
};

export default SandBox;
