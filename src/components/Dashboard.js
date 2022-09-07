import React from "react";
import "./dashboard.css";
import { Navbar } from "./Navbar";
import { Keysnippets } from "./Keysnippets";
import {
	AreaChart,
	Area,
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	PieChart,
	Pie,
	Sector,
	LineChart,
	Line
} from "recharts";

import words from "./morkwords";

import ReactWordcloud from "react-wordcloud";

const options = {
	colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
	enableTooltip: true,
	deterministic: false,
	fontFamily: "impact",
	fontSizes: [5, 50],
	fontStyle: "normal",
	fontWeight: "normal",
	padding: 1,
	rotations: 3,
	rotationAngles: [0, 0],
	scale: "sqrt",
	spiral: "archimedean",
	transitionDuration: 1000
};

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];

const data2 = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 }
];

const data3 = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];

const data6 = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const data4 = [
	{
		name: "Page A",
		uv: 1000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];

const data5 = [
	{
		name: "Page A",
		uv: 2000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Page B",
		uv: 2000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Page D",
		uv: 2000,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Page E",
		uv: 3000,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Page F",
		uv: 3000,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];

// const longestLabelLength = data
// 	.map((c) => c.displayName)
// 	.reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0);

export const Dashboard = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div style={{ height: "40px" }}></div>
			<div className="dashcontainer">
				<div className="sidenav"></div>
				<div className="dashinner">
					<div className="left">
						<div className="leftr">
							<div className="ritem">
								<span className="rvalheading">Average Rating</span>
								<span className="rval">3.8</span>
							</div>
							<div className="divider"></div>
							<div className="ritem">
								<span className="rvalheading">Total Responses</span>
								<span className="rval">310</span>
							</div>
							<div className="divider"></div>
							<div className="ritem">
								<span className="rvalheading"> Total Snippets</span>
								<span className="rval">466</span>
							</div>
						</div>
						<div className="leftsearch">
							<div className="leftsearcht">
								<i class="fa-solid fa-magnifying-glass"></i>
								<input type="text" />
							</div>
							<div className="leftsearchbt">
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
								<Keysnippets />
							</div>
						</div>
					</div>
					<div className="right">
						<div className="righttop">
							<div className="rtele">
								<span
									style={{
										width: "100%",
										// backgroundColor: "beige",
										textAlign: "left"
									}}
								>
									Topic
								</span>
								<div
									style={{
										width: "85%",
										// backgroundColor: "black",
										height: "200px"
									}}
								>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={200}
											height={100}
											data={data}
											layout="vertical"
										>
											<XAxis type="number" />
											<YAxis
												type="category"
												fontSize={"10px"}
												// tick={false}
												// width={longestLabelLength * 10}
											/>
											<Bar dataKey="uv" fill="#8884d8" />
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
							<div className="rtele">
								<span
									style={{
										width: "100%",
										// backgroundColor: "beige",
										textAlign: "left"
									}}
								>
									Sentiment
								</span>
								<div style={{ width: "85%", height: "200px" }}>
									<PieChart width={200} height={200}>
										<Pie
											data={data2}
											cx="50%"
											cy="50%"
											labelLine={false}
											label={renderCustomizedLabel}
											outerRadius={80}
											fill="#8884d8"
											dataKey="value"
											paddingAngle={5}
											innerRadius={30}
										>
											{data.map((entry, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS[index % COLORS.length]}
												/>
											))}
										</Pie>
									</PieChart>
								</div>
							</div>
							<div className="rtele">
								<span
									style={{
										width: "100%",
										// backgroundColor: "beige",
										textAlign: "left"
									}}
								>
									Sentiment By Topic
								</span>
								<div style={{ width: "85%", height: "200px" }}>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={500}
											height={300}
											data={data3}
											margin={{
												top: 20,
												right: 30,
												left: 20,
												bottom: 5
											}}
										>
											{/* <CartesianGrid strokeDasharray="3 3" /> */}
											<XAxis dataKey="name" />
											{/* <YAxis /> */}
											<Tooltip />
											<Legend />
											<Bar dataKey="pv" stackId="a" fill="#8884d8" />
											<Bar dataKey="uv" stackId="a" fill="#82ca9d" />
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</div>
						<div className="rightbottom">
							<div className="btlt">
								<div className="btlt1">
									<span
										style={{
											width: "100%",
											// backgroundColor: "beige",
											textAlign: "left"
										}}
									>
										Topics Over Time
									</span>
									<div style={{ width: "85%", height: "200px" }}>
										<ResponsiveContainer width="100%" height="100%">
											<BarChart
												width={500}
												height={300}
												data={data3}
												margin={{
													top: 20,
													right: 30,
													left: 20,
													bottom: 5
												}}
											>
												{/* <CartesianGrid strokeDasharray="3 3" /> */}
												<XAxis dataKey="name" />
												{/* <YAxis /> */}
												<Tooltip />
												<Legend />
												<Bar dataKey="pv" stackId="a" fill="#8884d8" />
												<Bar dataKey="uv" stackId="a" fill="#82ca9d" />
											</BarChart>
										</ResponsiveContainer>
									</div>
								</div>
								<div className="btlt2">
									<span
										style={{
											width: "100%",
											// backgroundColor: "beige",
											textAlign: "left"
										}}
									>
										Ratings Over Time
									</span>
									<div style={{ width: "85%", height: "200px" }}>
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={500}
												height={400}
												data={data5}
												margin={{
													top: 10,
													right: 30,
													left: 0,
													bottom: 0
												}}
											>
												{/* <CartesianGrid strokeDasharray="3 3" /> */}
												<XAxis dataKey="name" />
												{/* <YAxis /> */}
												<Tooltip />
												<Area
													type="monotone"
													dataKey="uv"
													stroke="#8884d8"
													fill="#8884d8"
												/>
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</div>
							</div>
							<div className="btlt">
								<div className="btlt1">
									<span
										style={{
											width: "100%",
											// backgroundColor: "beige",
											textAlign: "left"
										}}
									>
										Positive Sentiments Over Time
									</span>
									<div style={{ width: "85%", height: "200px" }}>
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={500}
												height={400}
												data={data4}
												margin={{
													top: 10,
													right: 30,
													left: 0,
													bottom: 0
												}}
											>
												{/* <CartesianGrid strokeDasharray="3 3" /> */}
												<XAxis dataKey="name" />
												{/* <YAxis /> */}
												<Tooltip />
												<Area
													type="monotone"
													dataKey="uv"
													stroke="#82ca9d"
													fill="#82ca9d"
												/>
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</div>

								<div className="btlt2">
									<span
										style={{
											width: "100%",
											// backgroundColor: "beige",
											textAlign: "left"
										}}
									>
										Negative Sentiments Over Time
									</span>
									<div style={{ width: "85%", height: "200px" }}>
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={500}
												height={400}
												data={data3}
												margin={{
													top: 10,
													right: 30,
													left: 0,
													bottom: 0
												}}
											>
												{/* <CartesianGrid strokeDasharray="3 3" /> */}
												<XAxis dataKey="name" />
												{/* <YAxis /> */}
												<Tooltip />
												<Area
													type="monotone"
													dataKey="uv"
													stroke="#f5222d"
													fill="#f5222d"
												/>
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</div>
							</div>
						</div>
						<div className="rightbottom">
							<div className="rightdeep">
								<ReactWordcloud words={words} options={options} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
