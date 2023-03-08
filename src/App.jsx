import { useState } from "react";

function App() {
  const [listaNomes, setListaNomes] = useState([]);
  const [inputNome, setInputNome] = useState("");
  const [inputIdade, setInputIdade] = useState();
  const [inputPokemon, setInputPokemon] = useState("");

  function addName() {
    const add = {
      name: inputNome,
      idade: inputIdade,
      pokemon: inputPokemon,
    };

    setListaNomes([...listaNomes, add]);
    setInputNome("");
    setInputIdade();
    setInputPokemon("");
  }

  return (
    <div>
      <h1>Olá World</h1>
      <ul>
        {listaNomes.map((item, indice) => (
          <li key={indice}>
            {item.name} - {item.idade} - {item.pokemon}
          </li>
        ))}
      </ul>
      <input
        placeholder="Insira seu nome"
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
      />
      <input
        placeholder="Insira sua idade"
        value={inputIdade}
        onChange={(event) => setInputIdade(event.target.value)}
      />
      <input
        placeholder="Pokemon favorito"
        value={inputPokemon}
        onChange={(event) => setInputPokemon(event.target.value)}
      />

      <button onClick={addName}>Incluir</button>
    </div>
  );
}

export default App;
