import { useState } from "react";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const [allLists, setAllLists] = useState([
    {
      title: "Guests",
      type: "ul",
      list: ["Tizio", "Caio"],
      value: "",
    },
    {
      title: "Pets",
      type: "ul",
      list: ["Denki", "Yeon", "Jin"],
      value: "",
    },
    {
      title: "To Do",
      type: "ol",
      list: ["Groceries", "Laundry", "Dishes"],
      value: "",
    },
  ]);

  return (
    <main>
      {allLists.map((obj, i) => {
        const { title, type, list, value } = obj;
        return (
          <div key={`obj${i}`}>
            <h2>{title}</h2>
            <div key={`objInputWrapper${i}`}>
              <input
                key={`input${i}`}
                type="text"
                value={value}
                onChange={(e) => {
                  obj.value = e.target.value;
                  setAllLists([...allLists]);
                }}
              />
              <span key={`objSpan${i}`}>
                <button
                  key={`btn${i}`}
                  onClick={() => {
                    obj.list = [...list, value];
                    setAllLists([...allLists]);
                    obj.value = '';
                  }}
                >
                  Add
                </button>
              </span>
            </div>
            <div key={`objListWrapper${i}`}>
              <CustomList key={`list${i}`} type={type} list={list} />
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default App;
