# Personal Finance Tracker

A comprehensive web application for tracking personal finances, built with Next.js and Tailwind CSS.

## Features 

- ✅ **Income & Expense Tracking**: Add transactions with amount, date, category, and notes
- ✅ **Financial Overview**: View total income, expenses, and current balance
- ✅ **Categorization**: Organize transactions by predefined categories
- ✅ **Filtering**: Filter transactions by type (income/expense) or view all
- ✅ **Sorting**: Transactions automatically sorted by date (newest first)
- ✅ **Data Persistence**: All data stored in browser localStorage
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Transaction Management**: Delete transactions with one click

## Frame Work used and others

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- LocalStorage API

## Setup Instructions

### Prerequisites
- Node.js 18+ pre installed
- npm 

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser and navigate to:
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## How to Use

### Adding a Transaction

1. Select transaction type (Income or Expense)
2. Enter the amount
3. Choose a category from the dropdown
4. Select the date
5. Add optional notes
6. Click "Add Transaction"

### Viewing Transactions

- All transactions are displayed below the form
- Transactions are sorted by date (newest first)
- Income transactions have a green indicator
- Expense transactions have a red indicator

### Filtering Transactions

Use the filter buttons to view:
- **All**: Shows all transactions
- **Income**: Shows only income transactions
- **Expense**: Shows only expense transactions

### Deleting Transactions

Click the "×" button on any transaction to remove it

### Data Persistence

- All data is automatically saved to your browser's localStorage
- Your transactions will persist even after closing the browser
- Data is device-specific and stored locally

## Categories

### Income Categories
- Salary
- Freelance
- Business
- Other

### Expense Categories
- Food
- Transport
- Shopping
- Bills
- Entertainment
- Other

## Browser Compatibility

- Chrome (recommended)
- and others

## Known Limitations

- Data is stored locally and not synced across devices
- No user authentication (single-user application)
- No data backup/export feature

## Future Enhancements

- Charts for visual data representation
- CSV export functionality
- Multiple user support with authentication
- Cloud data synchronization
- Budget setting and tracking
- Recurring transactions
- Custom categories

## Developer

Akinwamide Bukunmi Abiodun - Web3Bridge Cohort XIV

## License

This project was created as part of the Web3Bridge Pre-Qualification Exercise.


**Live Demo**: [https://personal-finance-tracker-blond-kappa.vercel.app/]

**Repository**: [https://github.com/Omoboi-coder/Personal-Finance-Tracker]
