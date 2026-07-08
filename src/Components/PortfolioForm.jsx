import { useState } from "react";

function PortfolioForm({ addCoin }) {
  const [coin, setCoin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!coin || !quantity || !price) {
      alert("Please fill all fields");
      return;
    }

    const newCoin = {
      id: Date.now(),
      coin,
      quantity: Number(quantity),
      price: Number(price),
    };

    addCoin(newCoin);

    setCoin("");
    setQuantity("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Coin Name"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        Add Coin
      </button>

    </form>
  );
}

export default PortfolioForm;