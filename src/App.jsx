import { useState } from "react";

["", ""];

[{ name }, { cidade }];

function App() {
  const [count, setCount] = useState([]);

  // function incrementValue(){
  //   // const copyCount = [...count];
  //   // copyCount.push(count.length);
  //   setCount([...count, count.length]);
  // }
  // dentro do return
  /* <h2>{count}</h2> */
  // <button onClick={incrementValue}>Incrementar</button>

  const [listaNomes, setListaNomes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputCidade, setInputCidade] = useState("");

  function addName() {
    setListaNomes([...listaNomes, inputText]);
    setInputText("");
    setInputCidade("");
  }

  return (
    <div>
      <h1>Olá World</h1>
      <ul>
        {listaNomes.map((item, indice) => (
          <li key={indice}>
            {item.name} - {item.cidade}
          </li>
        ))}
      </ul>
      <input
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <input
        value={cidade}
        onChange={(event) => setInputCidade(event.target.value)}
      />

      <button onClick={addName}>Incluir</button>
    </div>
  );
}

export default App;
