export default function ({
  type,
  list,
  buttons,
  remove,
  edit,
  newValue,
  saveNew,
}) {
  const listMap = list.map((string, ix) => (
    <li key={`string${ix}`}>
      <span>{string}</span>
      {buttons.map((button, i) => (
        <button
          key={`button${i}`}
          onClick={() => {
            button === "Remove" ? remove(ix) : edit(ix);
          }}
        >
          {button}
        </button>
      ))}
      <span>
        {newValue ? (
          <button
            onClick={() => {
              saveNew(ix);
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
