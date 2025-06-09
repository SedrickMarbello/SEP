import { useState, useEffect } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  // State
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [budget, setBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState('');
  
  // Categories
  const categories = [
    'Food', 
    'Transportation', 
    'Housing', 
    'Entertainment', 
    'Utilities', 
    'Healthcare', 
    'Education', 
    'Other'
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const savedBudget = parseFloat(localStorage.getItem('budget')) || 0;
    
    setExpenses(savedExpenses);
    setBudget(savedBudget);
    setBudgetInput(savedBudget);
  }, []);

  // Save data to localStorage whenever expenses or budget changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('budget', budget.toString());
  }, [expenses, budget]);

  // Add new expense
  const addExpense = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      alert('Please enter valid description and amount');
      return;
    }
    
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date
    };
    
    setExpenses([...expenses, newExpense]);
    
    // Reset form fields
    setDescription('');
    setAmount('');
    setCategory('Food');
    setDate(new Date().toISOString().split('T')[0]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Set budget
  const handleSetBudget = () => {
    const newBudget = parseFloat(budgetInput);
    if (isNaN(newBudget)) {
      alert('Please enter a valid budget amount');
      return;
    }
    
    setBudget(newBudget);
  };

  // Calculate total expenses
  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // Calculate remaining balance
  const getBalance = () => {
    return budget - getTotalExpenses();
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      
      {/* Budget Section */}
      <div className="budget-section">
        <h2>Set Budget</h2>
        <div className="budget-controls">
          <input
            type="number"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            placeholder="Enter budget amount"
          />
          <button onClick={handleSetBudget}>Set Budget</button>
        </div>
        <div className="budget-display">
          <strong>Budget:</strong> ₹{budget.toFixed(2)}
        </div>
      </div>
      
      {/* Add Expense Form */}
      <form className="expense-form" onSubmit={addExpense}>
        <h2>Add New Expense</h2>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      
      {/* Summary Section */}
      <div className="summary">
        <div className="summary-item">
          <strong>Total Expenses:</strong> ₹{getTotalExpenses().toFixed(2)}
        </div>
        <div className="summary-item">
          <strong>Remaining Balance:</strong> 
          <span className={getBalance() < 0 ? 'negative' : 'positive'}>
            ₹{getBalance().toFixed(2)}
          </span>
        </div>
      </div>
      
      {/* Expenses List */}
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>₹{expense.amount.toFixed(2)}</td>
                <td>{expense.date}</td>
                <td>
                  <button 
                    onClick={() => deleteExpense(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTracker;