import { useState } from "react";

export default function ({
  type,
  list,
  buttons,
  remove,
  edit,
  newValue,
  saveNew,
}) {
  const [isEdit, setIsEdit] = useState(false);
  
  const listMap = list.map((string, ix) => (
    <li key={`string${ix}`}>
      <span>{string}</span>
      {buttons.map((button, i) => (
        <button
          key={`button${i}`}
          onClick={() => {
            if(button === "Remove"){
              remove(ix)
            }else{
              edit(ix); 
              setIsEdit(true);
            }
          }}
        >
          {button}
        </button>
      ))}
      <span>
        {isEdit && newValue ? (
          <button
            onClick={() => {
              saveNew(ix);
              setIsEdit(false);
            }}
          >
            Save
          </button>
        ) : (
          ""
        )}
      </span>
    </li>
  ));
  return <>{type === "ul" ? <ul>{listMap}</ul> : <ol>{listMap}</ol>}</>;
}
