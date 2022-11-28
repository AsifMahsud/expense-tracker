import Chart from "../Chart/Chart";

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  const expenseChartValueCalculator = expense => {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January
    chartDataPoints[expenseMonth].value += expense.amount;
  };

  props.expenses.map(expense => expenseChartValueCalculator(expense));

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
