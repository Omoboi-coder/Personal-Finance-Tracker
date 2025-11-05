'use client';

import { useState } from 'react';

export default function FinanceTracker() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('salary');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  
const [transactions, setTransactions] = useState([]);

// Add this function
function addTransaction(e) {
  e.preventDefault();
  
  if (!amount || !date) {
    alert('Please fill amount and date');
    return;
  }

  const newTransaction = {
    id: Date.now(),
    amount: parseFloat(amount),
    type,
    category,
    date,
    notes,
    timestamp: new Date().toISOString()
  };

  setTransactions([newTransaction, ...transactions]);
  
  // Reset form
  setAmount('');
  setNotes('');
  setDate('');
}

// Update form tag
<form onSubmit={addTransaction} className="space-y-4"></form>

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Personal Finance Tracker
        </h1>

        {/* Add Transaction Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount ($)</label>
                <input 
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="salary">Salary</option>
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
              <input 
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Add notes..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>
      {/* Transactions List */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Transactions ({transactions.length})
        </h2>

  {transactions.length === 0 ? (
    <p className="text-center text-gray-500 py-8">No transactions yet</p>
  ) : (
    <div className="space-y-3">
      {transactions.map(transaction => (
        <div 
          key={transaction.id}
          className={`p-4 rounded-lg border-l-4 ${
            transaction.type === 'income' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded text-sm font-semibold ${
                  transaction.type === 'income' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {transaction.type.toUpperCase()}
                </span>
                <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                  {transaction.category}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                ${transaction.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
              {transaction.notes && (
                <p className="text-sm text-gray-700 mt-2 italic">
                  &quot;{transaction.notes}&quot;
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
``</div>

    {/* Transactions List */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">
    Transactions ({transactions.length})
  </h2>
  
  {transactions.length === 0 ? (
    <p className="text-center text-gray-500 py-8">No transactions yet</p>
  ) : (
    <div className="space-y-3">
      {transactions.map(transaction => (
        <div 
          key={transaction.id}
          className={`p-4 rounded-lg border-l-4 ${
            transaction.type === 'income' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded text-sm font-semibold ${
                  transaction.type === 'income' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {transaction.type.toUpperCase()}
                </span>
                <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                  {transaction.category}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                ${transaction.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
              {transaction.notes && (
                <p className="text-sm text-gray-700 mt-2 italic">
                  &quot;{transaction.notes}&quot;
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
    </div>
  );
}