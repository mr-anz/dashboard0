import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { useStateContext } from '../../context'
const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

const TinyArea = () => {

  const { expenseData } = useStateContext()

  const highestAmount = Math.max(...expenseData.map(d => d.amount));
  const interval = highestAmount / 10;

  return (
    <div>
        <ResponsiveContainer width="95%" height={500}>
          <AreaChart
            data={expenseData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
          <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
          </defs>
            <XAxis dataKey="mode" />
            <YAxis    
                      interval={interval}
                      tickFormatter={value => `${value} (${highestAmount})`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stackId="1"
              stroke="#2451B7"
              fill="url(#color)"
            />
   
          </AreaChart>
        </ResponsiveContainer>
    </div>
  );
}



export default TinyArea
{/**
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}

          tickFormatter={(number) => `$${number.toFixed(2)}`}
*/}