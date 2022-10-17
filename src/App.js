import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 335.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Toilet Paper",
      amount: 234.67,
      date: new Date(2021, 6, 12),
    },
    {
      title: "Wodden Desk",
      amount: 766.67,
      date: new Date(2021, 8, 12),
    },
    {
      title: "Gym Membership",
      amount: 686.67,
      date: new Date(2021, 1, 23),
    },
  ];

  return (
    <div>
      <h1>Let's Get Started</h1>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
