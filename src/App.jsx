import { useState } from "react";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const allLists = [
    {
      title: "Guests",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Pets",
      type: "ul",
      list: ["Denki", "Yeon", "Jin"],
    },
    {
      title: "To Do",
      type: "ol",
      list: ["Groceries", "Laundry", "Dishes"],
    },
  ];
  const [list, setList] = useState([
    {
      title: "Guests",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Pets",
      type: "ul",
      list: ["Denki", "Yeon", "Jin"],
    },
    {
      title: "To Do",
      type: "ol",
      list: ["Groceries", "Laundry", "Dishes"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <main>
        <div>
          <>
          {list.map(({ title }) => (
            <>
            <h2 key={title}>{title}</h2>
            <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => 
                     setInputValue(e.target.value)}
                />
                <span>
                  <button
                    onClick={() =>
                      setList([
                        {
                          ...l,
                          inputValue,
                        }
                      ])}
                  >
                    Add
                  </button>
                </span>
              </div>
              </>))}
            {list.map(({ type, list }, i) => (
            <div key={`list${i}`}>
              <CustomList type={type} list={list} />
            </div>
          ))}
          
          </>
        </div>
      </main>
    </>
  );
}

export default App;
