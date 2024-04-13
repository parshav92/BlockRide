// pages/TransactionsPage.js
"use client"
import { useState } from 'react';

const TransactionsPage = ({ initialTransactions }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const loadMore = async () => {
    // Fetch more data from API
    const response = await fetch('your-api-endpoint');
    const newData = await response.json();

    // Update transactions state with new data
    setTransactions(prevTransactions => [...prevTransactions, ...newData]);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
      {transactions && transactions.map(transaction => (
    <li key={transaction.id}>{transaction.description}</li>
  ))}
      </ul>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default TransactionsPage;

export async function getStaticProps() {
  // Fetch initial data from API
  const response = await fetch('your-api-endpoint');
  const initialTransactions = await response.json();

  return {
    props: {
      initialTransactions,
    },
  };
}
