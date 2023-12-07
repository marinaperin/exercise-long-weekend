export default function ({ type, list }) {
    const map = list.map((string, i) => (
            <li key={`string${i}`}>{string}</li>
          ));

  return (
    <>
    
      {type === "ul" ? (
        <ul>
          {map}
        </ul>
      )
      :
      (
        <ol>
          {map}
        </ol>
      )}
    </>
  );
}
