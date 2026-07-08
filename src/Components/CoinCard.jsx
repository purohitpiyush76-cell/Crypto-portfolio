function CoinCard({ coin, deleteCoin }) {

  const value = coin.quantity * coin.price;

  return (

    <div className="coin-card">

      <h2>{coin.coin}</h2>

      <p>
        Quantity : {coin.quantity}
      </p>

      <p>
        Price : ${coin.price.toLocaleString()}
      </p>

      <p>
        Value : ${value.toLocaleString()}
      </p>

      <button
        onClick={() => deleteCoin(coin.id)}
      >
        Delete
      </button>

    </div>

  );
}

export default CoinCard;