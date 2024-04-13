'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api-sepolia.etherscan.io/api';
const API_KEY = 'IWQMJ6MAFM92VWCUF9GHMP2M7WET65QGFM';
const TransactionCard = ({ address }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      let isMounted = true;
      const userWalletAddress = localStorage.getItem('userWalletAddress');

      const fetchTransactions = async () => {
        setLoading(true);
        try {
          const response = await axios.get(API_URL, {
            params: {
              module: 'account',
              action: 'txlist',
              address: userWalletAddress ||  "0x9Ced2ef5921d9B6448424605Fa27BD7f265cD6AE",
              startblock: 0,
              endblock: 99999999,
              sort: 'desc',
              apikey: API_KEY,
            },
          });
  
          if (isMounted) {
            if (response.data.status === '1') {
              setTransactions(response.data.result);
            } else {
              setError(response.data.message);
            }
            setLoading(false);
          }
        } catch (error) {
          if (isMounted) {
            setError(error.message);
            setLoading(false);
          }
        }
      };
  
      fetchTransactions();
  
      return () => {
        isMounted = false;
      };
    }, [address]);
  return (
    <div className="transaction-card">
      <h2>Transaction History</h2>
      {/* {loading && <p>Loading...</p>} */}
      {error && <p>Error: {error}</p>}
      { !error && transactions.length === 0 && <p>No transactions found.</p>}
      { !error && transactions.length > 0 && (
        <div className="transaction-list">
          {transactions.map(transaction => (
            <div key={transaction.hash} className="transaction-item">
              <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
              <p><strong>Block Number:</strong> {transaction.blockNumber}</p>
              <p><strong>Timestamp:</strong> {new Date(transaction.timeStamp * 1000).toLocaleString()}</p>
              <p><strong>From:</strong> {transaction.from}</p>
              <p><strong>To:</strong> {transaction.to}</p>
              <p><strong>Value:</strong> {transaction.value} Wei</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
