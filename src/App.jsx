import React, { useState } from "react";
import "./App.css";
import Table from "./Table";
const App = () => {
  const coins = [
    { id: 1, name: "BTC", price: 25000 },
    { id: 2, name: "DOGE", price: 0.75 },
    { id: 3, name: "RIPPLE", price: 1.5 },
  ];

  const [addedCoins, setAddedCoins] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleAddCoin = (coin) => {
    const qty = parseFloat(quantities[coin.id]) || 0;
    const total = qty * coin.price;
    const existingCoin = addedCoins.find((item) => item.id === coin.id);

    if (existingCoin) {
      setAddedCoins(
        addedCoins.map((item) =>
          item.id === coin.id ? { ...item, qty, total } : item
        )
      );
    } else {
      setAddedCoins([...addedCoins, { ...coin, qty, total }]);
    }
  };

  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  return (
    <div>
      <div className="container">
        {coins.map((item) => (
          <div key={item.id} className="coin-container">
            <div className="coins-image">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <input
              type="number"
              step="0.01"
              value={quantities[item.id] || ""}
              onChange={(e) => handleQtyChange(item.id, e.target.value)}
            />
            <button onClick={() => handleAddCoin(item)}>ADD</button>
          </div>
        ))}
      </div>
      <Table addedCoins={addedCoins} />
    </div>
  );
};

export default App;
