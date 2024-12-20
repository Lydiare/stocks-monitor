import React, { useEffect, useState } from 'react';

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<{ name: string; price: number }[]>([]);

  useEffect(() => {
    const fetchStocks = () => {
      setStocks([
        { name: 'AAPL', price: 150 },
        { name: 'GOOGL', price: 2800 },
        { name: 'AMZN', price: 3400 },
      ]);
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.name}>
            {stock.name}: ${stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
