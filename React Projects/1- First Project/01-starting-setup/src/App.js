import ExpenseItem from "./components/ExpenseItem";

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
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expensesList[0]}></ExpenseItem>
      <ExpenseItem expense={expensesList[1]}></ExpenseItem>
      <ExpenseItem expense={expensesList[2]}></ExpenseItem>
    </div>
  );
}

export default App;
