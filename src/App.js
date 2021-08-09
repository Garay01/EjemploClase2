import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [umil, setUmil] = useState(0);
  const [dmil, setDmil] = useState(0);
  const [cmil, setCmil] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUnidad(total * tipo * 1);
    setDecena((total * tipo) / 45914.2);
    setCentena(total * tipo * 6.49);
    setUmil(total * tipo * 0.85);
    setDmil(total * tipo * 0.72);
    setCmil(total * tipo * 20);
  }, [total, tipo]);

  const handleTotalChange = (e) => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dólar Americano: {unidad}</p>
      <p>Bitcoin: {decena}</p>
      <p>Yuan: {centena}</p>
      <p>Euro: {umil}</p>
      <p>Libras Esterlinas: {dmil}</p>
      <p>Peso Mexicano: {cmil}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={(event) => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dólar Americano</option>
        <option value={45914.2}>Bitcoin</option>
        <option value={0.15}>Yuan</option>
        <option value={1.17}>Euro</option>
        <option value={1.38}>Libras Esterlinas</option>
        <option value={0.05}>Peso mexicano</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
