import ExpenseItem from "ExpenseItems";
import "Expenses.css"; 

function Expenses() {

    const expenses = [
      { title: "Car Insurance", amount: 335.67, date: new Date(2021, 2, 28) },
      { title: "Toilet Paper", amount: 234.67, date: new Date(2021, 6, 12) },
      { title: "Wodden Desk", amount: 766.67, date: new Date(2021, 8, 12) },
      { title: "Gym Membership", amount: 686.67, date: new Date(2021, 1, 23) },
    ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;