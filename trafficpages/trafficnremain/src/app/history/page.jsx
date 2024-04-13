'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    // Fetch transaction history data from Etherscan API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.etherscan.io/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: '0x15652FF460B43137Ab729255E82CEe277495cF9C', // Replace with the address you want to query
            apikey: 'YourApiKeyToken', // Replace with your Etherscan API key
          },
        });

        // Extract relevant transaction data from the API response
        if (response.data.status === '1') {
          setTransactionHistory(response.data.result);
        } else {
          console.error('Error fetching transaction history:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching transaction history:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>Method</th>
            <th>Block</th>
            <th>Age</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>Txn Fee</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map(transaction => (
            <tr key={transaction.hash}>
              <td>{transaction.hash}</td>
              <td>{transaction.input ? 'Transfer' : 'Unknown'}</td>
              <td>{transaction.blockNumber}</td>
              <td>{transaction.timeStamp}</td>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.value}</td>
              <td>{transaction.gasPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
