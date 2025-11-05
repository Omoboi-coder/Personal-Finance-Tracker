'use client';

import { useState, useEffect } from 'react';

export default function FinanceTracker() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('salary');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [filter, setFilter] = useState('all');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Add transaction
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

  // Delete transaction
  function deleteTransaction(id) {
    setTransactions(transactions.filter(t => t.id !== id));
  }

  // Filter transactions
  const filteredTransactions = transactions.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'income') return t.type === 'income';
    if (filter === 'expense') return t.type === 'expense';
    return t.category === filter;
  });

  // Sort by date (newest first)
  const sortedTransactions = [...filteredTransactions].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Personal Finance Tracker
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Income</h3>
            <p className="text-3xl font-bold">${totalIncome.toFixed(2)}</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Expense</h3>
            <p className="text-3xl font-bold">${totalExpense.toFixed(2)}</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Balance</h3>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
          <form onSubmit={addTransaction} className="space-y-4">
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
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {type === 'income' ? (
                    <>
                      <option value="salary">Salary</option>
                      <option value="freelance">Freelance</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </>
                  ) : (
                    <>
                      <option value="food">Food</option>
                      <option value="transport">Transport</option>
                      <option value="shopping">Shopping</option>
                      <option value="bills">Bills</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="other">Other</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
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

        {/* Filter Buttons */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-3">Filter Transactions</h3>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('income')}
              className={`px-4 py-2 rounded ${filter === 'income' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Income
            </button>
            <button 
              onClick={() => setFilter('expense')}
              className={`px-4 py-2 rounded ${filter === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Transactions ({sortedTransactions.length})
          </h2>
          
          {sortedTransactions.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No transactions yet</p>
          ) : (
            <div className="space-y-3">
              {sortedTransactions.map(transaction => (
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
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      {transaction.notes && (
                        <p className="text-sm text-gray-700 mt-2 italic">
                          &#34;{transaction.notes}&#34;
                        </p>
                      )}
                    </div>
                    <button 
                      onClick={() => deleteTransaction(transaction.id)}
                      className="text-red-500 hover:text-red-700 font-bold text-xl"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}