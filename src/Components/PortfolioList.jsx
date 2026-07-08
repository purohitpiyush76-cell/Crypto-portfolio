import CoinCard from "./CoinCard";

function PortfolioList({ portfolio, deleteCoin }) {

  if (portfolio.length === 0) {
    return (
      <h2>No Coins Added Yet.</h2>
    );
  }

  return (
    <div>

      {portfolio.map((coin) => (
        <CoinCard
          key={coin.id}
          coin={coin}
          deleteCoin={deleteCoin}
        />
      ))}

    </div>
  );
}

export default PortfolioList;