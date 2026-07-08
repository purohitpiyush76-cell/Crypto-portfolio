import { useState } from "react";
import "./App.css";

import PortfolioForm from "./components/PortfolioForm";
import PortfolioList from "./components/PortfolioList";

function App() {
  const [portfolio, setPortfolio] = useState([]);

  // Add a new coin
  function addCoin(newCoin) {
    setPortfolio([...portfolio, newCoin]);
  }

  // Delete a coin
  function deleteCoin(id) {
    setPortfolio(portfolio.filter((coin) => coin.id !== id));
  }

  // Calculate total value
  const totalValue = portfolio.reduce(
    (total, coin) => total + coin.quantity * coin.price,
    0
  );

  return (
    <div className="container">

      <h1>🚀 Crypto Portfolio Tracker</h1>

      <PortfolioForm addCoin={addCoin} />

      <PortfolioList
        portfolio={portfolio}
        deleteCoin={deleteCoin}
      />

      <div className="total-card">
        <h2>Total Portfolio Value</h2>

        <h1>
          $
          {totalValue.toLocaleString()}
        </h1>
      </div>

    </div>
  );
}

export default App;