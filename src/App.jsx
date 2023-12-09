import { useState } from "react";
import "./App.css";
import CustomList from "./components/CustomList";

function App() {
  const [allLists, setAllLists] = useState([
    {
      title: "Unsure",
      type: "ul",
      list: ["Bagigio", "Gianni", "Paciugo", "Secco"],
      value: "",
    },
    {
      title: "Confirmed",
      type: "ul",
      list: ["Denki", "Yeon", "Jin"],
      value: "",
    },
    {
      title: "Not Coming",
      type: "ul",
      list: ["Tizio", "Caio", "Sempronio"],
      value: "",
    },
    {
      title: "Things To Buy",
      type: "ol",
      list: ["Cake", "Drinks", "Dishes"],
      value: "",
    },
  ]);
  const buttons = ["Remove", "Edit"];
  const [newValue, setNewValue] = useState();
  const [isNewValue, setIsNewValue] = useState(false);

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
                  setNewValue(e.target.value);
                  setAllLists([...allLists]);
                }}
              />
              <span key={`objSpan${i}`}>
                <button
                  key={`btn${i}`}
                  onClick={() => {
                    obj.list = [...list, value];
                    setAllLists([...allLists]);
                    obj.value = "";
                  }}
                >
                  Add
                </button>
              </span>
            </div>
            <div key={`objListWrapper${i}`}>
              <CustomList
                key={`list${i}`}
                type={type}
                remove={(ix) => {
                  obj.list = list.filter((el) => el !== list[ix]);
                  setAllLists([...allLists]);
                }}
                edit={(ix) => {
                  setNewValue(obj.list[ix]);
                  obj.value = obj.list[ix];
                  setNewValue(obj.value);
                  setIsNewValue(true);
                }}
                newValue={isNewValue}
                saveNew={(ix) => {
                  obj.list[ix] = newValue;
                  setAllLists([...allLists]);
                  obj.value = "";
                  setIsNewValue(false);
                }}
                list={list}
                buttons={buttons}
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default App;
