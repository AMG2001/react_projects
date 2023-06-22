import ExpensesList from './components/ExpsensesList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let date = new Date(2021,10,15);
  let expensesList = [
    {
      date: date,                    
      day : date.toLocaleString('en-US', {day : '2-digit'}),
      month: date.toLocaleString('en-US',{month : 'long'}),
      year : date.getFullYear(),
      title: "Car Auusrance",
      amount: 297.68,
    },
    {
      date: date,                    
      day : date.toLocaleString('en-US', {day : '2-digit'}),
      month: date.toLocaleString('en-US',{month : 'long'}),
      year : date.getFullYear(),
      title: "Car Auusrance",
      amount: 297.68,
    },
    {
      date: date,                    
      day : date.toLocaleString('en-US', {day : '2-digit'}),
      month: date.toLocaleString('en-US',{month : 'long'}),
      year : date.getFullYear(),
      title: "Car Auusrance",
      amount: 297.68,
    },
    
  ];
  return (
    <div>
      <NewExpense />
      <ExpensesList expensesList={expensesList}/>
    </div>
  );
}

export default App;
