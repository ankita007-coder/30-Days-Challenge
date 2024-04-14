import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChartComponent = ({ data }) => (
  <div className="chart-container">
    <h2>Line Chart</h2>
    <LineChart width={1000} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </div>
);

const BarChartComponent = ({ data }) => (
  <div className="chart-container">
    <h2>Bar Chart</h2>
    <BarChart width={500} height={300} data={data}>
      <Bar dataKey="value" fill="#8884d8" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  </div>
);

const PieChartComponent = ({ data }) => (
  <div className="chart-container">
    <h2>Pie Chart</h2>
    <PieChart width={500} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);



const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
  { name: 'E', value: 278 },
  { name: 'F', value: 189 },
];

const App = () => (
  <div className="App">
    
    <div><LineChartComponent data={data} /></div>
    <div className='row'>
      <BarChartComponent data={data}/>
      <PieChartComponent data={data} />
    </div>
    
  </div>
);

export default App;

