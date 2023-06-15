import ExpenseItem from './ExpenseItem';

export default function ExpensesList({expensesList}){
    return (
        <div>
        <ExpenseItem expense={expensesList[0]}></ExpenseItem>
        <ExpenseItem expense={expensesList[1]}></ExpenseItem>
        <ExpenseItem expense={expensesList[2]}></ExpenseItem>
        </div>
    );
}

